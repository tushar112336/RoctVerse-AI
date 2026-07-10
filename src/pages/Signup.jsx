import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await api.post("/auth/signup", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Signup Successful");

      navigate("/dashboard");

    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("DATA:", error.response?.data);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Signup Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#060B1A] flex justify-center items-center px-6">

      <div className="w-full max-w-md bg-[#111827] rounded-3xl border border-violet-500 p-10 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white">
          Create Account
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Join RoctVerse AI Today
        </p>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#1B2436] text-white p-4 rounded-xl outline-none"
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-[#1B2436] text-white p-4 rounded-xl outline-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 hover:scale-105 transition font-semibold text-white"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?
          <Link
            to="/login"
            className="text-violet-400 ml-2"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}