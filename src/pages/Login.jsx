import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B1A] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111827] border border-violet-500 rounded-3xl p-10 shadow-2xl">

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 flex items-center justify-center text-3xl">
            🚀
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Login to continue with <span className="text-violet-400">RoctVerse AI</span>
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#1B2436] text-white p-4 rounded-xl outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#1B2436] text-white p-4 rounded-xl outline-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-400 mt-8">

          Don't have an account?

          <Link
            to="/signup"
            className="text-violet-400 ml-2"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}