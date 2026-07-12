import axios from "axios";
import User from "../models/User.js";
import { extractTextFromPDF } from "../utils/pdfParser.js";

// =======================
// Update Dashboard Score
// =======================

const updateUserProgress = async (
  userId,
  {
    career = 0,
    resume = 0,
    progress = 0,
  }
) => {
  const user = await User.findById(userId);

  if (!user) return;

  user.careerScore = Math.min(
    100,
    (user.careerScore || 0) + career
  );

  user.resumeScore = Math.min(
    100,
    (user.resumeScore || 0) + resume
  );

  user.learningProgress = Math.min(
    100,
    (user.learningProgress || 0) + progress
  );

  await user.save();
};

// =======================
// Ask AI Function
// =======================

const askAI = async (prompt) => {
  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
};

// =======================
// AI Skill Analyzer
// =======================

export const analyzeSkills = async (req, res) => {
  try {
    const { skills, experience, goal } = req.body;

    const prompt = `
You are an expert Career Coach.

Analyze this student's profile.

Skills:
${skills.join(", ")}

Experience:
${experience} years

Career Goal:
${goal}

Give:

1. Skill Score out of 100
2. Strong Points
3. Weak Skills
4. Missing Technologies
5. 30-Day Learning Roadmap
6. Best Career Recommendation
7. Salary Estimate in India
`;

    const analysis = await askAI(prompt);

    await updateUserProgress(req.user.id, {
      career: 5,
      progress: 5,
    });

    res.json({
      success: true,
      analysis,
    });

  } catch (error) {

    console.log("AI ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: error.response?.data || error.message,
    });

  }
};
// =======================
// AI Resume Analyzer
// =======================

export const analyzeResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume PDF is required",
      });
    }

    const resumeText = await extractTextFromPDF(req.file.buffer);

    const prompt = `
You are an ATS Resume Expert.

Analyze the following resume.

Resume:
${resumeText}

Return:

1. ATS Score (0-100)
2. Resume Strengths
3. Resume Weaknesses
4. Missing Skills
5. Suggested Improvements
6. Best Career Role
7. Interview Preparation Tips

Format the response nicely.
`;

    const analysis = await askAI(prompt);

    const match = analysis.match(/\b(\d{1,3})\b/);

    const atsScore = match ? Number(match[1]) : 0;
    const user = await User.findById(req.user.id);

if (!user) {
  return res.status(404).json({
    success: false,
    message: "User not found",
  });
}

user.resumeHistory.push({
  fileName: req.file.originalname,
  atsScore: atsScore,
  analyzedAt: new Date(),
});

await user.save();

    await updateUserProgress(req.user.id, {
      resume: 20,
      progress: 10,
    });

    res.json({
      success: true,
      atsScore,
      analysis,
    });

  } catch (error) {

    console.log("Resume AI Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: error.response?.data || error.message,
    });

  }
};

// =======================
// AI Interview Questions
// =======================

export const generateInterviewQuestions = async (req, res) => {
  try {

    const { role, experience } = req.body;

    const prompt = `
You are a Senior Technical Interviewer.

Generate 15 interview questions.

Role: ${role}

Experience: ${experience} years

Include:
- Easy
- Medium
- Hard
- HR Questions
- Coding Questions

Return in numbered list.
`;

    const questions = await askAI(prompt);

    await updateUserProgress(req.user.id, {
      career: 10,
      progress: 10,
    });

    res.json({
      success: true,
      questions,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.response?.data || error.message,
    });

  }
};
// =======================
// Career Recommendation
// =======================

export const careerRecommendation = async (req, res) => {
  try {

    const { skills, experience, goal } = req.body;

    const prompt = `
You are an Expert Career Counselor.

Student Skills:
${skills}

Experience:
${experience} years

Career Goal:
${goal}

Provide:

1. Best Career Path
2. Top 5 Job Roles
3. Salary Range in India
4. Required Skills
5. Top Companies
6. Future Scope
`;

    const recommendation = await askAI(prompt);

    await updateUserProgress(req.user.id, {
      career: 5,
      progress: 5,
    });

    res.json({
      success: true,
      recommendation,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.response?.data || error.message,
    });

  }
};

// =======================
// Learning Roadmap
// =======================

export const generateRoadmap = async (req, res) => {
  try {

    const { goal, experience } = req.body;

    const prompt = `
Create a detailed 30-Day Learning Roadmap.

Goal:
${goal}

Experience:
${experience} years

Include:

1. Week 1
2. Week 2
3. Week 3
4. Week 4
5. Best Projects
6. Best Free Resources
7. Interview Tips
`;

    const roadmap = await askAI(prompt);

    await updateUserProgress(req.user.id, {
      progress: 15,
    });

    res.json({
      success: true,
      roadmap,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.response?.data || error.message,
    });

  }
};

// =======================
// Job Recommendation
// =======================

export const recommendJobs = async (req, res) => {
  try {

    const { skills, experience, location } = req.body;

    const prompt = `
Recommend best jobs.

Skills:
${skills}

Experience:
${experience}

Location:
${location}

Return:

1. Top 10 Jobs
2. Salary
3. Companies
4. Required Skills
5. Future Demand
`;

    const jobs = await askAI(prompt);

    await updateUserProgress(req.user.id, {
      career: 5,
      progress: 5,
    });

    res.json({
      success: true,
      jobs,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.response?.data || error.message,
    });

  }
};
// =======================
// AI Chatbot
// =======================

export const chatWithAI = async (req, res) => {
  try {

    const { message } = req.body;

    const reply = await askAI(message);

    await updateUserProgress(req.user.id, {
      progress: 2,
    });

    res.json({
      success: true,
      reply,
    });

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: error.response?.data || error.message,
    });

  }
};

// =======================
// Project Recommendation
// =======================

export const recommendProjects = async (req, res) => {
  try {

    const { skills, goal } = req.body;

    const prompt = `
You are an Expert Software Mentor.

Student Skills:
${skills}

Career Goal:
${goal}

Recommend 10 real-world projects.

For every project provide:

1. Project Name
2. Difficulty
3. Technologies
4. Duration
5. Description
6. Learning Outcome
`;

    const projects = await askAI(prompt);

    await updateUserProgress(req.user.id, {
      career: 15,
      progress: 10,
    });

    res.json({
      success: true,
      projects,
    });

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: error.response?.data || error.message,
    });

  }
};

// =======================
// Course Recommendation
// =======================

export const recommendCourses = async (req, res) => {
  try {

    const { skills, goal } = req.body;

    const prompt = `
You are an Expert Career Mentor.

Student Skills:
${skills}

Career Goal:
${goal}

Recommend 10 best courses.

For every course provide:

1. Course Name
2. Difficulty
3. Duration
4. What student will learn
5. Why recommended
6. Free Resources
`;

    const courses = await askAI(prompt);

    await updateUserProgress(req.user.id, {
      career: 5,
      progress: 15,
    });

    res.json({
      success: true,
      courses,
    });

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: error.response?.data || error.message,
    });

  }
};