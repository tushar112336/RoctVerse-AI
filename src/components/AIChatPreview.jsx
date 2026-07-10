import { Link } from "react-router-dom";
import { Bot, Send, Sparkles } from "lucide-react";

export default function AIChatPreview() {
  return (
    <section   id="ai-chat" className="bg-[#060B1A] py-28 text-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500 text-violet-300">
            AI Career Assistant
          </span>

          <h1 className="text-5xl font-bold mt-8">
            Ask Anything.
            <span className="text-violet-500"> Anytime.</span>
          </h1>

          <p className="text-gray-400 mt-8 leading-8 text-lg">
            Our AI assistant helps you choose careers,
            improve resumes, recommend projects,
            prepare interviews and answer all your career
            questions instantly.
          </p>
<Link to="/login">

  <button className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 hover:scale-105 transition-all duration-300">

    Try AI Assistant

  </button>

</Link>

        </div>

        {/* Chat Card */}

        <div className="bg-[#111827]
border
border-violet-500
rounded-3xl
p-8
hover:shadow-2xl
hover:shadow-violet-500/30
hover:scale-[1.02]
transition-all
duration-300">

          <div className="flex items-center gap-3">

            <Bot className="text-violet-500"/>

            <h2 className="text-xl font-bold">
              RoctVerse AI
            </h2>

          </div>

          <div className="space-y-5 mt-8">

            <div className="flex-1
bg-[#1B2436]
rounded-xl
px-5
py-4
outline-none
focus:ring-2
focus:ring-violet-500
transition-all">
              👋 Hi! How can I help you today?
            </div>

            <div className="bg-violet-600 rounded-xl p-4 ml-auto w-fit max-w-sm">
              I want to become a Full Stack Developer.
            </div>

            <div className="bg-[#1B2436] rounded-xl p-4 max-w-md">

              <Sparkles className="inline text-violet-400 mr-2"/>

              Based on your skills, I recommend learning:
              HTML → CSS → JavaScript → React →
              Node.js → MongoDB → Build Projects 🚀

            </div>

          </div>

          <div className="flex mt-8 gap-4">

            <input
              type="text"
              placeholder="Ask anything..."
              className="flex-1 bg-[#1B2436] rounded-xl px-5 py-4 outline-none"
            />

            <button className="bg-violet-600 px-5 rounded-xl">

              <Send/>

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}