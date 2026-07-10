import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <footer 
      id="footer"
    className="bg-[#020617] text-white border-t border-gray-800">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-5 md:grid-cols-2 gap-10">

        {/* Logo */}

        <div>

         <Link to="/">

<h1 className="text-3xl font-bold">

RoctVerse <span className="text-violet-500">AI</span>

</h1>

</Link>

          <p className="text-gray-400 mt-5 leading-7">
            AI-powered platform for career guidance,
            resume analysis, project recommendations,
            and personalized learning roadmaps.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#111827] flex items-center justify-center hover:bg-violet-600 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#111827] flex items-center justify-center hover:bg-violet-600 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[#111827] flex items-center justify-center hover:bg-violet-600 transition"
            >
              <FaInstagram size={20} />
            </a>

          </div>

        </div>

        {/* Company */}

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Company
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li>
  <a href="#footer" className="hover:text-violet-400 transition">
    About
  </a>
</li>
<li>
  <a href="#features" className="hover:text-violet-400 transition">
    Features
  </a>
</li>            
<li>
  <Link to="/signup" className="hover:text-violet-400 transition">
    Pricing
  </Link>
</li>

<li>
  <Link to="/dashboard" className="hover:text-violet-400 transition">
    Careers
  </Link>
</li>
          </ul>

        </div>

        {/* Resources */}

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Resources
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li><a href="#roadmap" className="hover:text-violet-400 transition">
AI Roadmap
</a></li>

            <li><a href="#resume" className="hover:text-violet-400 transition">
Resume Analyzer
</a></li>

            <li><Link to="/dashboard" className="hover:text-violet-400 transition">
Projects
</Link></li>
            <li><Link to="/dashboard" className="hover:text-violet-400 transition">
Courses
</Link></li>

          </ul>

        </div>

        {/* Support */}

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Support
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li><Link to="/dashboard" className="hover:text-violet-400 transition">
Help Center
</Link></li>
            <li><a
href="mailto:support@roctverseai.com"
className="hover:text-violet-400 transition"
>
Contact
</a></li>
            <li><a href="#" className="hover:text-violet-400">Terms</a></li>
            <li><a href="#" className="hover:text-violet-400">Contact</a></li>

          </ul>

        </div>

        {/* Newsletter */}

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Newsletter
          </h2>

          <p className="text-gray-400">
            Subscribe to receive AI career updates.
          </p>

          <div className="flex mt-6">

            <input
              type="email"
              placeholder="Your Email"
className="flex-1
bg-[#111827]
px-4
py-3
rounded-l-xl
outline-none
focus:ring-2
focus:ring-violet-500
transition-all"             />

            <button className="hover:bg-violet-600
hover:scale-110
transition-all
duration-300">
              <IoSend size={20} />

            </button>

          </div>

          <div className="flex items-center gap-2 mt-8 text-gray-400">

            <MdEmail size={20} />

            support@roctverseai.com

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 RoctVerse AI. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Made with ❤️ by <span className="text-violet-400 font-semibold">Tushar</span>
          </p>

        </div>

      </div>

    </footer>
  );
}