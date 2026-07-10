import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaFileAlt,
  FaHistory,
  FaRoute,
  FaProjectDiagram,
  FaBook,
  FaRobot,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      name: "Skill Analyzer",
      icon: <FaUserGraduate />,
      path: "/skill-analyzer",
    },
    {
      name: "Resume Analyzer",
      icon: <FaFileAlt />,
      path: "/resume-analyzer",
    },
    {
      name: "Resume History",
      icon: <FaHistory />,
      path: "/resume-history"
    },
    {
      name: "Career Roadmap",
      icon: <FaRoute />,
      path: "/roadmap",
    },
    {
      name: "Projects",
      icon: <FaProjectDiagram />,
      path: "/projects",
    },
    {
      name: "Courses",
      icon: <FaBook />,
      path: "/courses",
    },
    {
      name: "AI Assistant",
      icon: <FaRobot />,
      path: "/chat",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-[#111827] border-r border-gray-800 flex flex-col">

      <div className="p-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-white">
          🚀 RoctVerse
          <span className="text-violet-500"> AI</span>
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          AI Career Platform
        </p>
      </div>

      <nav className="flex-1 p-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-xl mb-3 transition ${
                isActive
                  ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white"
                  : "text-gray-400 hover:bg-[#1B2436] hover:text-white"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-6 border-t border-gray-800">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-4 px-5 py-4 rounded-xl bg-red-500 hover:bg-red-600 transition text-white"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

    </aside>
  );
}