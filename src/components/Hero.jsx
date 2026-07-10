import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#060B1A] text-white pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <div>

          <span className="px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500 text-violet-300 text-sm">
            🚀 AI Powered Career Intelligence
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight">
            Your Career
            <br />
            Journey
            <span className="text-violet-500"> Powered by AI</span>
          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-8">
            RoctVerse AI helps students discover career paths,
            analyze their skills, generate AI roadmaps and build
            an impressive future through personalized learning.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

  <Link to="/signup">

    <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 hover:scale-105 transition">

      Get Started

    </button>

  </Link>

  <Link to="/login">

    <button className="px-8 py-4 rounded-xl border border-gray-600 hover:bg-white/10 transition">

      Explore

    </button>

  </Link>

</div>

          {/* Stats */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            <div>
              <h2 className="text-3xl font-bold text-violet-400">
                10K+
              </h2>
              <p className="text-gray-500 mt-2">
                Active Users
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-400">
                500+
              </h2>
              <p className="text-gray-500 mt-2">
                Career Paths
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-400">
                1000+
              </h2>
              <p className="text-gray-500 mt-2">
                Courses
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-400">
                95%
              </h2>
              <p className="text-gray-500 mt-2">
                Success Rate
              </p>
            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="bg-[#111827] rounded-3xl border border-violet-500 p-8 shadow-2xl">

          <h2 className="text-2xl font-semibold">
            Welcome Back 👋
          </h2>

          <p className="text-gray-400 mt-2">
            Continue your learning journey.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-8">

            <div className="bg-[#1B2436] rounded-xl p-5">
              <h3 className="text-gray-400">
                Skill Progress
              </h3>

              <h1 className="text-4xl font-bold mt-3 text-violet-400">
                72%
              </h1>
            </div>

            <div className="bg-[#1B2436] rounded-xl p-5">
              <h3 className="text-gray-400">
                Skills Learned
              </h3>

              <h1 className="text-4xl font-bold mt-3 text-violet-400">
                24
              </h1>
            </div>

          </div>

          <div className="mt-8 bg-[#1B2436] rounded-xl p-6">

            <h2 className="font-semibold text-lg">
              AI Suggested Roadmap
            </h2>

            <ul className="mt-5 space-y-4">

              <li className="flex justify-between">
                <span>HTML & CSS</span>
                <span className="text-green-400">
                  Completed
                </span>
              </li>

              <li className="flex justify-between">
                <span>JavaScript</span>
                <span className="text-yellow-400">
                  In Progress
                </span>
              </li>

              <li className="flex justify-between">
                <span>React</span>
                <span className="text-gray-400">
                  Pending
                </span>
              </li>

              <li className="flex justify-between">
                <span>Node.js</span>
                <span className="text-gray-400">
                  Pending
                </span>
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}