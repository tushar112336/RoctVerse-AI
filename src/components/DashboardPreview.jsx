import { Link } from "react-router-dom";
import { BarChart3, Flame, Trophy, CheckCircle } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section id="dashboard-preview" xclassName="bg-[#0B1120] py-28 text-white">

      <div className="bg-[#111827] rounded-3xl border border-violet-500 p-8 shadow-2xl
hover:shadow-violet-500/30
hover:scale-[1.02]
transition-all
duration-300">

        {/* LEFT */}

        <div>

          <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500 text-violet-300">
            AI Dashboard
          </span>

          <h1 className="text-5xl font-bold mt-8 leading-tight">
            Track Your Progress
            <span className="text-violet-500">
              {" "}Like Never Before
            </span>
          </h1>

          <p className="text-gray-400 mt-8 text-lg leading-8">
            Monitor your learning journey with beautiful analytics,
            AI generated recommendations and real-time career progress.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <CheckCircle className="text-violet-500" />
              <span>Skill Progress Tracking</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="text-violet-500" />
              <span>AI Career Recommendations</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="text-violet-500" />
              <span>Weekly Learning Analytics</span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="text-violet-500" />
              <span>Personalized Roadmap</span>
            </div>

          </div>

          <Link to="/login">

  <button className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 hover:scale-105 transition">

    Explore Dashboard

  </button>

</Link>

        </div>

        {/* RIGHT */}

        <div className="bg-[#111827] rounded-3xl border border-violet-500 p-8 shadow-2xl">

          <div className="flex justify-between">

            <h2 className="text-2xl font-bold">
              Dashboard
            </h2>

            <BarChart3 className="text-violet-500" />

          </div>

          {/* Cards */}

          <div className="grid grid-cols-2 gap-5 mt-8">

            <div className="bg-[#1B2436] rounded-xl p-5">

              <p className="text-gray-400">
                Skill Progress
              </p>

              <h2 className="text-4xl font-bold mt-3 text-violet-400">
                72%
              </h2>

            </div>

            <div className="bg-[#1B2436] rounded-xl p-5">

              <p className="text-gray-400">
                Career Score
              </p>

              <h2 className="text-4xl font-bold mt-3 text-violet-400">
                89
              </h2>

            </div>

          </div>

          {/* Roadmap */}

          <div className="bg-[#1B2436] rounded-xl mt-8 p-6">

            <h3 className="font-semibold text-lg">
              AI Suggested Roadmap
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex justify-between">
                <span>HTML & CSS</span>
                <span className="text-green-400">Completed</span>
              </div>

              <div className="flex justify-between">
                <span>JavaScript</span>
                <span className="text-yellow-400">In Progress</span>
              </div>

              <div className="flex justify-between">
                <span>React</span>
                <span className="text-gray-400">Pending</span>
              </div>

              <div className="flex justify-between">
                <span>Node.js</span>
                <span className="text-gray-400">Locked</span>
              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="grid grid-cols-2 gap-5 mt-8">

            <div className="bg-[#1B2436] rounded-xl p-5">

              <Flame className="text-orange-500" />

              <h3 className="mt-4 text-xl font-bold">
                18 Days
              </h3>

              <p className="text-gray-400">
                Learning Streak
              </p>

            </div>

            <div className="bg-[#1B2436] rounded-xl p-5">

              <Trophy className="text-yellow-500" />

              <h3 className="mt-4 text-xl font-bold">
                Level 7
              </h3>

              <p className="text-gray-400">
                Achievements
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}