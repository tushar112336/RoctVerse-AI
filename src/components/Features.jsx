import {
  Brain,
  Route,
  GraduationCap,
  Briefcase,
  FileText,
  Bot,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Brain size={35} />,
      title: "AI Career Guidance",
      desc: "Get personalized career suggestions based on your interests and skills.",
    },
    {
      icon: <Route size={35} />,
      title: "Learning Roadmaps",
      desc: "Step-by-step AI generated roadmap for your dream career.",
    },
    {
      icon: <GraduationCap size={35} />,
      title: "Skill Assessment",
      desc: "Analyze your current skills and discover what you're missing.",
    },
    {
      icon: <Briefcase size={35} />,
      title: "Project Suggestions",
      desc: "AI recommends projects to improve your portfolio.",
    },
    {
      icon: <FileText size={35} />,
      title: "Course Recommendations",
      desc: "Find the best free and paid resources to learn faster.",
    },
    {
      icon: <Bot size={35} />,
      title: "AI Assistant",
      desc: "Ask career related questions anytime using our AI assistant.",
    },
  ];

  return (
    <section id="features" className="bg-[#0B1120] text-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Why Choose
          <span className="text-violet-500">
            {" "}RoctVerse AI?
          </span>
        </h1>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          Everything you need to build your dream career in one intelligent
          platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => (
            <div
              key={index}
className="bg-[#111827] border border-white/10 rounded-2xl p-8
hover:border-violet-500
hover:shadow-2xl
hover:shadow-violet-500/20
transition-all
duration-300
hover:-translate-y-3"            >

              <div className="text-violet-500 mb-6">
                {item.icon}
              </div>

              <h2 className="text-2xl font-semibold mb-4">
                {item.title}
              </h2>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}