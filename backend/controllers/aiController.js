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

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }
    );
    


    // Dashboard Score Update
    await updateUserProgress(req.user.id, {
      career: 5,
      progress: 5,
    });

    res.json({
      success: true,
      analysis:
        response.data.candidates[0].content.parts[0].text,
    });

  } catch (error) {

    console.log(
      "AI ERROR:",
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      message:
        error.response?.data?.error?.message ||
        error.message,
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

    const resumeText = await extractTextFromPDF(
      req.file.buffer
    );

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

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }
    );
    const text = response.data.candidates[0].content.parts[0].text;

// ATS Score nikalna
let atsScore = 0;

const scoreMatch = text.match(/ATS\s*Score\s*[:\-]?\s*(\d{1,3})/i);

if (scoreMatch) {
  atsScore = Number(scoreMatch[1]);
}

const user = await User.findById(req.user.id);

user.resumeHistory.push({
  fileName: req.file.originalname,
  atsScore: atsScore,
  analysis: text,
});

await user.save();
  await user.save();

    // Dashboard Score Update
    await updateUserProgress(req.user.id, {
      resume: 20,
      progress: 10,
    });

    res.json({
      success: true,
      analysis:
        response.data.candidates[0].content.parts[0].text,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
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

Generate 15 interview questions for:

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

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }
    );

    // Dashboard Score Update
    await updateUserProgress(req.user.id, {
      career: 10,
      progress: 10,
    });

    res.json({
      success: true,
      questions:
        response.data.candidates[0].content.parts[0].text,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
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
${experience}

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

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }
    );

    // Dashboard Score Update
    await updateUserProgress(req.user.id, {
      career: 5,
      progress: 5,
    });

    res.json({
      success: true,
      recommendation:
        response.data.candidates[0].content.parts[0].text,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
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
You are an Expert Software Mentor.

Create a detailed learning roadmap.

Goal:
${goal}

Experience:
${experience} years

Generate:

1. 30-Day Learning Plan
2. Week 1 Topics
3. Week 2 Topics
4. Week 3 Topics
5. Week 4 Topics
6. Best Projects to Build
7. Best Free Resources
8. Interview Preparation Tips

Return the roadmap in a well-formatted manner.
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }
    );

    // Dashboard Score Update
    await updateUserProgress(req.user.id, {
      progress: 15,
    });

    res.json({
      success: true,
      roadmap:
        response.data.candidates[0].content.parts[0].text,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
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
You are an AI Career Advisor.

Based on:

Skills: ${skills}
Experience: ${experience} years
Location: ${location}

Recommend:

1. Top 10 Job Roles
2. Expected Salary in India
3. Top Hiring Companies
4. Required Skills
5. Future Demand
6. Career Growth Tips

Return in a clean, structured format.
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }
    );

    // Dashboard Score Update
    await updateUserProgress(req.user.id, {
      career: 5,
      progress: 5,
    });

    res.json({
      success: true,
      jobs:
        response.data.candidates[0].content.parts[0].text,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// =======================
// AI Chatbot
// =======================

export const chatWithAI = async (req, res) => {
  try {

    const { message } = req.body;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: message,
              },
            ],
          },
        ],
      }
    );

    // Dashboard Score Update
    await updateUserProgress(req.user.id, {
      progress: 2,
    });

    res.json({
      success: true,
      reply: response.data.candidates[0].content.parts[0].text,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
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

For each project provide:

1. Project Name
2. Difficulty
3. Technologies Required
4. Duration
5. Short Description
6. Learning Outcome

Return in a clean format.
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }
    );

    // Dashboard Score Update
    await updateUserProgress(req.user.id, {
      career: 15,
      progress: 10,
    });

    res.json({
      success: true,
      projects:
        response.data.candidates[0].content.parts[0].text,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
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
4. What will student learn
5. Why recommended
6. Free learning resources

Return in clean format.
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }
    );

    // Dashboard Score Update
    await updateUserProgress(req.user.id, {
      career: 5,
      progress: 15,
    });

    res.json({
      success: true,
      courses:
        response.data.candidates[0].content.parts[0].text,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};