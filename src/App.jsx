import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowitWorks from "./components/Howi tWorks";
import DashboardPreview from "./components/DashboardPreview";
import CareerRoadmap from "./components/CareerRoadmap";
import ResumeAnalyzerPreview from "./components/ResumeAnalyzerPreview";
import AIChatPreview from "./components/AIChatPreview";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import About from "./components/About";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SkillAnalyzer from "./pages/SkillAnalyzer";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Roadmap from "./pages/Roadmap";
import AIChat from "./pages/AIChat";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ResumeHistory from "./pages/ResumeHistory"

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowitWorks />
      <DashboardPreview />
      <CareerRoadmap />
      <ResumeAnalyzerPreview />
      <AIChatPreview />
      <Pricing />
      <Testimonials />
      <FAQ />
      <About />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* AI Features */}
      <Route path="/skill-analyzer" element={<SkillAnalyzer />} />
      <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
      <Route path="/resume-history" element={<ResumeHistory />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/chat" element={<AIChat />} />

      {/* Recommendations */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/courses" element={<Courses />} />

      {/* User */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}