import { UserPlus, BrainCircuit, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={40} />,
      title: "Create Your Profile",
      desc: "Sign up and tell us about your skills, interests, and dream career.",
    },
    {
      icon: <BrainCircuit size={40} />,
      title: "AI Analyzes Your Skills",
      desc: "RoctVerse AI identifies your strengths, skill gaps, and recommends a personalized roadmap.",
    },
    {
      icon: <Rocket size={40} />,
      title: "Grow & Get Job Ready",
      desc: "Complete projects, track your progress, and become industry-ready with AI guidance.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#060B1A] py-28 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          How It
          <span className="text-violet-500"> Works</span>
        </h1>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Follow three simple steps to transform your learning journey with AI.
        </p>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {steps.map((step, index) => (
            <div
              key={index}
className="relative bg-[#111827] rounded-3xl p-8
border border-white/10
hover:border-violet-500
hover:shadow-2xl
hover:shadow-violet-500/20
transition-all
duration-300
hover:-translate-y-3"            >

              {/* Step Number */}
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <div className="mt-8 text-violet-500">
                {step.icon}
              </div>

              <h2 className="text-2xl font-semibold mt-6">
                {step.title}
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}