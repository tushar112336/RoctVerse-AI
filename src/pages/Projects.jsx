import { useState } from "react";
import api from "../services/api";

export default function Projects() {

  const [goal, setGoal] = useState("Full Stack Developer");
  const [projects, setProjects] = useState("");
  const [loading, setLoading] = useState(false);

  const generateProjects = async () => {
    try {
      setLoading(true);

      const res = await api.post("/ai/projects", {
        skills: "HTML, CSS, JavaScript, React",
        goal,
      });

      setProjects(res.data.projects);

    } catch (err) {
      console.log(err);
      alert("Failed to generate projects");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B1A] text-white p-10">

      <h1 className="text-5xl font-bold">
        AI Project Recommendations
      </h1>

      <p className="text-gray-400 mt-3">
        Generate AI recommended projects according to your career goal.
      </p>

      <div className="bg-[#111827] rounded-3xl p-8 mt-10 border border-violet-500">

        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full bg-[#1B2436] p-4 rounded-xl"
        >
          <option>Full Stack Developer</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Data Analyst</option>
          <option>AI Engineer</option>
        </select>

        <button
          onClick={generateProjects}
          className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500"
        >
          {loading ? "Generating..." : "Generate Projects"}
        </button>

      </div>

      {projects && (

        <div className="mt-10 bg-[#111827] rounded-3xl p-8 border border-violet-500 whitespace-pre-wrap">

          <h2 className="text-3xl font-bold mb-6">
            🚀 Recommended Projects
          </h2>

          {projects}

        </div>

      )}

    </div>
  );
}