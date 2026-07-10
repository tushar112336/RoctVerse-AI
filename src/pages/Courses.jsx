import { useState } from "react";
import api from "../services/api";

export default function Courses() {

  const [goal, setGoal] = useState("Full Stack Developer");
  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCourses = async () => {

    try {

      setLoading(true);

      const res = await api.post("/ai/courses", {
        skills: "HTML, CSS, JavaScript, React",
        goal,
      });

      setCourses(res.data.courses);

    } catch (err) {

      console.log(err);
      alert("Failed to load courses");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-[#060B1A] text-white p-10">

      <h1 className="text-5xl font-bold">
        AI Course Recommendations
      </h1>

      <p className="text-gray-400 mt-3">
        Personalized AI learning recommendations.
      </p>

      <div className="bg-[#111827] rounded-3xl border border-violet-500 p-8 mt-10">

        <select
          value={goal}
          onChange={(e)=>setGoal(e.target.value)}
          className="w-full bg-[#1B2436] p-4 rounded-xl"
        >

          <option>Full Stack Developer</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>AI Engineer</option>
          <option>Data Analyst</option>

        </select>

        <button
          onClick={generateCourses}
          className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500"
        >

          {loading ? "Generating..." : "Generate Courses"}

        </button>

      </div>

      {courses && (

        <div className="mt-10 bg-[#111827] rounded-3xl border border-violet-500 p-8 whitespace-pre-wrap">

          <h2 className="text-3xl font-bold mb-6">

            📚 Recommended Courses

          </h2>

          {courses}

        </div>

      )}

    </div>

  );

}