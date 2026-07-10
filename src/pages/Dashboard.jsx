import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    profileImage: "",
    careerScore: 0,
    resumeScore: 0,
    learningProgress: 0,
    learningStreak: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const res = await api.get("/auth/profile");

      setUser(res.data.user);

    } catch (error) {

      console.log(error);

      localStorage.removeItem("token");
      navigate("/login");

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060B1A] flex justify-center items-center text-white text-3xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#060B1A]">

      <Sidebar />

      <main className="flex-1 p-8">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Welcome Back, {user.name} 👋
            </h1>

            <p className="text-gray-400 mt-2">
              Keep learning and increase your Career Score.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <button
              onClick={fetchProfile}
              className="px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700"
            >
              Refresh
            </button>

            <img
              src={user.profileImage || "https://i.pravatar.cc/100"}
              alt="Profile"
              className="w-14 h-14 rounded-full border-2 border-violet-500"
            />

          </div>

        </div>

        {/* Dashboard Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          <Card
            title="Career Score"
            value={user.careerScore}
            color="bg-violet-500"
          />

          <Card
            title="Resume Score"
            value={user.resumeScore}
            color="bg-green-500"
          />

          <Card
            title="Learning Progress"
            value={user.learningProgress}
            color="bg-blue-500"
          />

          <StreakCard
            streak={user.learningStreak}
          />

        </div>

        {/* AI Recommendation */}

        <div className="bg-[#111827] rounded-3xl p-8 mt-10 border border-gray-800">

          <h2 className="text-3xl font-bold text-white">
            🤖 AI Recommendation
          </h2>

          <p className="text-gray-400 leading-8 mt-5">

            Analyze your skills, upload your resume,
            complete interview practice,
            build projects and finish courses.

            <br /><br />

            Every activity increases your Career Score,
            Resume Score and Learning Progress.

          </p>

          <button
            onClick={() => navigate("/roadmap")}
            className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 hover:scale-105 transition"
          >
            View Learning Roadmap
          </button>

        </div>

      </main>

    </div>
  );
}

function Card({ title, value, color }) {

  return (

    <div className="bg-[#111827] rounded-2xl p-6 border border-gray-800">

      <p className="text-gray-400">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-white mt-3">
        {value}%
      </h2>

      <div className="w-full h-3 bg-gray-700 rounded-full mt-6">

        <div
          className={`${color} h-3 rounded-full transition-all duration-700`}
          style={{
            width: `${value}%`,
          }}
        ></div>

      </div>

    </div>

  );

}

function StreakCard({ streak }) {

  return (

    <div className="bg-[#111827] rounded-2xl p-6 border border-gray-800">

      <p className="text-gray-400">
        Learning Streak
      </p>

      <h2 className="text-4xl font-bold text-orange-400 mt-3">
        {streak} Days
      </h2>

      <div className="mt-6">

        <div className="w-full h-3 bg-gray-700 rounded-full">

          <div
            className="bg-orange-500 h-3 rounded-full transition-all duration-700"
            style={{
              width: `${Math.min(streak * 10, 100)}%`,
            }}
          ></div>

        </div>

      </div>

    </div>

  );

}