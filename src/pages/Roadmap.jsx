import { useState } from "react";
import api from "../services/api";

export default function Roadmap() {
  const [goal, setGoal] = useState("Full Stack Developer");
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {
    try {
      setLoading(true);

      const res = await api.post("/ai/roadmap", {
        goal,
      });

      setRoadmap(res.data.roadmap || res.data.analysis);

    } catch (error) {
      console.log(error);
      alert("Failed to generate roadmap");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B1A] text-white p-10">

      <h1 className="text-5xl font-bold">
        AI Career Roadmap
      </h1>

      <p className="text-gray-400 mt-3">
        Generate your personalized learning roadmap.
      </p>

      <div className="bg-[#111827] rounded-3xl p-8 mt-10 border border-violet-500">

        <h2 className="text-2xl font-bold">
          Select Your Career Goal
        </h2>

        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="mt-6 w-full bg-[#1B2436] p-4 rounded-xl outline-none"
        >
          <option>Full Stack Developer</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Data Analyst</option>
          <option>AI Engineer</option>
        </select>

        <button
          onClick={generateRoadmap}
          className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500"
        >
          {loading ? "Generating..." : "Generate AI Roadmap"}
        </button>

      </div>

      {roadmap && (

        <div className="mt-10 bg-[#111827] rounded-3xl p-8 border border-violet-500 whitespace-pre-wrap">

          <h2 className="text-3xl font-bold mb-6">
            🚀 Your AI Roadmap
          </h2>

          {roadmap}

        </div>

      )}

    </div>
  );
}