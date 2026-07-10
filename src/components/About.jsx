import { Brain, Users, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#0B1120] py-28 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500 text-violet-300">
            About Us
          </span>

          <h1 className="text-5xl font-bold mt-8">

            Building Careers with
            <span className="text-violet-500"> AI</span>

          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">

            RoctVerse AI is an intelligent career platform designed to help
            students discover career paths, improve skills, analyze resumes,
            build projects, and prepare for the future using Artificial Intelligence.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-[#111827] rounded-3xl p-8 border border-white/10 hover:border-violet-500 transition">

            <Brain className="text-violet-500" size={45}/>

            <h2 className="text-2xl font-bold mt-6">
              AI Powered
            </h2>

            <p className="text-gray-400 mt-4">

              Smart recommendations personalized for every learner.

            </p>

          </div>

          <div className="bg-[#111827] rounded-3xl p-8 border border-white/10 hover:border-violet-500 transition">

            <Users className="text-violet-500" size={45}/>

            <h2 className="text-2xl font-bold mt-6">

              Student First

            </h2>

            <p className="text-gray-400 mt-4">

              Designed especially for students and freshers.

            </p>

          </div>

          <div className="bg-[#111827] rounded-3xl p-8 border border-white/10 hover:border-violet-500 transition">

            <Rocket className="text-violet-500" size={45}/>

            <h2 className="text-2xl font-bold mt-6">

              Career Growth

            </h2>

            <p className="text-gray-400 mt-4">

              Helping learners become industry-ready.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}