import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      desc: "Perfect for beginners",
      features: [
        "AI Career Guidance",
        "Skill Assessment",
        "Learning Roadmaps",
        "Basic AI Assistant",
      ],
      active: false,
    },
    {
      name: "Pro",
      price: "₹499/mo",
      desc: "Best for serious learners",
      features: [
        "Everything in Free",
        "Resume Analyzer",
        "Unlimited AI Chat",
        "Project Recommendations",
        "Priority Support",
      ],
      active: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For Colleges & Institutes",
      features: [
        "Unlimited Students",
        "Analytics Dashboard",
        "Dedicated Support",
        "Custom AI Models",
      ],
      active: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[#060B1A] py-28 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500 text-violet-300">
            Pricing
          </span>

          <h1 className="text-5xl font-bold mt-8">

            Choose Your
            <span className="text-violet-500"> Plan</span>

          </h1>

          <p className="text-gray-400 mt-5">
            Flexible pricing for students and professionals.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`rounded-3xl p-8 border transition duration-300 hover:-translate-y-2 ${
                plan.active
                  ? "bg-gradient-to-b from-violet-700 to-indigo-700 border-violet-500"
                  : "bg-[#111827] border-white/10 hover:border-violet-500"
              }`}
            >

              <h2 className="text-3xl font-bold">
                {plan.name}
              </h2>

              <h3 className="text-5xl font-bold mt-6">
                {plan.price}
              </h3>

              <p className="text-gray-300 mt-4">
                {plan.desc}
              </p>

              <div className="mt-8 space-y-4">

                {plan.features.map((item, i) => (

                  <div key={i} className="flex items-center gap-3">

                    <Check className="text-green-400" size={20}/>

                    {item}

                  </div>

                ))}

              </div>

              <button className="w-full mt-10 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">

                Get Started

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}