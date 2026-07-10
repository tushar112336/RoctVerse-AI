import "../index.css";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#060B1A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-3 cursor-pointer">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
              🚀
            </div>

            <h1 className="text-2xl font-bold text-white">
              RoctVerse <span className="text-violet-500">AI</span>
            </h1>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            <Link to="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>

            <a href="#features" className="text-gray-300 hover:text-white transition">
              Features
            </a>

            <a href="#roadmap" className="text-gray-300 hover:text-white transition">
              Roadmap
            </a>

            <a href="#resources" className="text-gray-300 hover:text-white transition">
              Resources
            </a>

            <a href="#pricing" className="text-gray-300 hover:text-white transition">
              Pricing
            </a>

            <a href="#about" className="text-gray-300 hover:text-white transition">
              About
            </a>

          </nav>

          {/* Buttons */}

          <div className="hidden lg:flex items-center gap-4">

            <Link to="/login">

              <button className="px-6 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">

                Login

              </button>

            </Link>

            <Link to="/signup">

              <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold hover:scale-105 transition">

                Get Started

              </button>

            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (

          <div className="lg:hidden pb-6">

            <div className="flex flex-col gap-5 mt-3">

              <Link to="/" onClick={() => setOpen(false)} className="text-gray-300">
                Home
              </Link>

              <a href="#features" className="text-gray-300">
                Features
              </a>

              <a href="#roadmap" className="text-gray-300">
                Roadmap
              </a>

              <a href="#courses" className="text-gray-300">
                Resources
              </a>

              <a href="#pricing" className="text-gray-300">
                Pricing
              </a>

              <a href="#about" className="text-gray-300">
                About
              </a>

              <Link to="/login" onClick={() => setOpen(false)}>

                <button className="w-full py-3 rounded-xl border border-white/20 text-white">

                  Login

                </button>

              </Link>

              <Link to="/signup" onClick={() => setOpen(false)}>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 text-white">

                  Get Started

                </button>

              </Link>

            </div>

          </div>

        )}

      </div>
    </header>
  );
}