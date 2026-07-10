import { useState } from "react";
import api from "../services/api";

export default function SkillAnalyzer() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Python",
    "Java",
  ];

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const analyzeSkills = async () => {
    try {
      setLoading(true);

      const res = await api.post("/ai/analyze", {
        skills: selectedSkills,
        experience: 0,
        goal: "Full Stack Developer",
      });

      setResult(res.data.analysis);

    } catch (error) {
      alert("Failed to analyze skills");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B1A] text-white p-10">

      <h1 className="text-5xl font-bold">
        AI Skill Analyzer
      </h1>

      <p className="text-gray-400 mt-4">
        Select your current skills and let AI analyze your profile.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">

        {skills.map((skill) => (
          <button
            key={skill}
            onClick={() => toggleSkill(skill)}
            className={`rounded-xl p-4 border ${
              selectedSkills.includes(skill)
                ? "bg-violet-600 border-violet-600"
                : "bg-[#111827] border-gray-700"
            }`}
          >
            {skill}
          </button>
        ))}

      </div>

      <button
        onClick={analyzeSkills}
        disabled={loading}
        className="mt-10 px-10 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500"
      >
        {loading ? "Analyzing..." : "Analyze with AI"}
      </button>

      {result && (
        <div className="mt-10 bg-[#111827] rounded-2xl p-6 whitespace-pre-wrap">
          {result}
        </div>
      )}

    </div>
  );
}