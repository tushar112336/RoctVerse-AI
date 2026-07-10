import { useState } from "react";
import { FaUpload, FaFilePdf } from "react-icons/fa";
import api from "../services/api";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");

  const handleUpload = (e) => {
    const selected = e.target.files[0];

    if (selected) {
      setFile(selected);
      setFileName(selected.name);
    }
  };

  const analyzeResume = async () => {
    if (!file) {
      alert("Please upload your resume.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", file);

      const res = await api.post("/ai/resume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setAnalysis(res.data.analysis);
    } catch (error) {
      console.log(error);
      alert("Resume analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B1A] text-white p-10">

      <h1 className="text-5xl font-bold">
        AI Resume Analyzer
      </h1>

      <p className="text-gray-400 mt-3">
        Upload your Resume and get AI ATS Analysis
      </p>

      <div className="mt-10 bg-[#111827] rounded-3xl p-10 border border-violet-500">

        <div className="flex flex-col items-center">

          <FaUpload className="text-6xl text-violet-400"/>

          <input
            type="file"
            accept=".pdf"
            onChange={handleUpload}
            className="mt-8"
          />

          {fileName && (
            <div className="flex items-center gap-3 mt-5 text-green-400">
              <FaFilePdf />
              {fileName}
            </div>
          )}

          <button
            onClick={analyzeResume}
            className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>

        </div>

      </div>

      {analysis && (
        <div className="mt-10 bg-[#111827] rounded-3xl p-8 border border-violet-500 whitespace-pre-wrap">

          <h2 className="text-3xl font-bold mb-6">
            🤖 AI Resume Analysis
          </h2>

          {analysis}

        </div>
      )}

    </div>
  );
}