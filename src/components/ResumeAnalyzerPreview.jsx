import { Link } from "react-router-dom";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";

export default function ResumeAnalyzerPreview() {
  return (
    <section  id="resources" className="bg-[#0B1120] py-28 text-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500 text-violet-300">
            AI Resume Analyzer
          </span>

          <h1 className="text-5xl font-bold mt-8">
            Upload Resume &
            <span className="text-violet-500"> Get AI Insights</span>
          </h1>

          <p className="text-gray-400 mt-8 text-lg leading-8">
            Analyze your resume instantly, detect missing skills,
            improve ATS score and receive personalized AI suggestions.
          </p>

          <Link to="/login">

  <button className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 hover:scale-105 transition">

    Upload Resume

  </button>

</Link>
        </div>

        {/* Right */}

        <div className="bg-[#111827]
rounded-3xl
border
border-violet-500
p-8
hover:shadow-2xl
hover:shadow-violet-500/30
hover:scale-[1.02]
transition-all
duration-300">

          {/* Upload Box */}

          <div className="border-2 border-dashed border-violet-500 rounded-2xl p-10 text-center">

            <Upload size={45} className="mx-auto text-violet-400" />

            <h2 className="text-2xl mt-4 font-semibold">
              Drag & Drop Resume
            </h2>

            <p className="text-gray-400 mt-2">
              PDF / DOCX Supported
            </p>

          </div>

          {/* Score */}

          <div className="mt-8 bg-[#1B2436] rounded-xl p-5">

            <div className="flex justify-between">

              <h3>ATS Score</h3>

              <h2 className="text-3xl font-bold text-green-400">
                88%
              </h2>

            </div>

          </div>

          {/* Skills */}

          <div className="mt-6 bg-[#1B2436] rounded-xl p-5">

            <h3 className="font-semibold mb-4">
              Skills Detected
            </h3>

            <div className="space-y-3">

              <div className="flex justify-between">

                <span>React</span>

                <CheckCircle className="text-green-400" />

              </div>

              <div className="flex justify-between">

                <span>JavaScript</span>

                <CheckCircle className="text-green-400" />

              </div>

              <div className="flex justify-between">

                <span>Node.js</span>

                <AlertCircle className="text-yellow-400" />

              </div>

              <div className="flex justify-between">

                <span>MongoDB</span>

                <AlertCircle className="text-yellow-400" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}