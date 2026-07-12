import { useState } from "react";
import { FaRobot, FaUserCircle, FaPaperPlane } from "react-icons/fa";
import api from "../services/api";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm RoctVerse AI. How can I help you with your career today?",
    },
  ]);

  const sendMessage = async () => {
    if (message.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await api.post("/ai/chat", {
        message,
      });

      const aiReply = {
        sender: "ai",
        text: res.data.reply,
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (error) {
  console.log("===== GEMINI ERROR =====");
  console.log("Status:", error.response?.status);
  console.log("Data:", error.response?.data);
  console.log("Message:", error.message);

  res.status(500).json({
    success: false,
    message: error.response?.data || error.message,
  });
}

    setLoading(false);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#060B1A] text-white flex">

      <div className="w-72 bg-[#111827] border-r border-gray-800 p-6 hidden lg:block">
        <h1 className="text-3xl font-bold">🤖 RoctVerse AI</h1>

        <p className="text-gray-400 mt-3">
          Ask anything about:
        </p>

        <ul className="mt-8 space-y-4 text-gray-300">
          <li>📄 Resume Review</li>
          <li>💼 Career Advice</li>
          <li>🛣 Learning Roadmap</li>
          <li>🚀 Project Ideas</li>
          <li>🎯 Interview Questions</li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col">

        <div className="bg-[#111827] border-b border-gray-800 p-6">
          <h2 className="text-2xl font-bold">
            AI Career Assistant
          </h2>

          <p className="text-gray-400">
            Powered by Gemini AI
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-xl p-5 rounded-2xl flex gap-4 ${
                  msg.sender === "user"
                    ? "bg-violet-600"
                    : "bg-[#1B2436]"
                }`}
              >

                <div className="text-2xl">
                  {msg.sender === "user"
                    ? <FaUserCircle />
                    : <FaRobot />}
                </div>

                <div>{msg.text}</div>

              </div>

            </div>

          ))}

          {loading && (
            <div className="text-gray-400">
              🤖 Thinking...
            </div>
          )}

        </div>

        <div className="p-6 bg-[#111827] border-t border-gray-800">

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Ask anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              className="flex-1 bg-[#1B2436] rounded-xl px-5 py-4 outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-gradient-to-r from-violet-600 to-indigo-500 px-6 rounded-xl"
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}