import { useEffect, useState } from "react";
import api from "../services/api";

export default function ResumeHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await api.get("/auth/profile");
      setHistory(res.data.user.resumeHistory || []);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B1A] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Resume History
      </h1>

      {history.length === 0 ? (
        <p>No Resume History Found</p>
      ) : (
        <div className="space-y-5">
          {history.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] p-6 rounded-xl border border-violet-500"
            >
              <p>
                <b>File:</b> {item.fileName}
              </p>

              <p>
                <b>ATS Score:</b> {item.atsScore}
              </p>

              <p>
                <b>Date:</b>{" "}
                {new Date(item.analyzedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}