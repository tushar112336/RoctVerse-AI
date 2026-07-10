import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Is RoctVerse AI completely free?",
      answer:
        "Yes! RoctVerse AI provides free access to career guidance, skill analysis, and personalized learning roadmaps. Premium AI features may be added in the future.",
    },
    {
      question: "How does the AI generate my career roadmap?",
      answer:
        "Our AI analyzes your skills, interests, and career goals, then creates a personalized step-by-step roadmap with recommended technologies, courses, and projects.",
    },
    {
      question: "Can I upload my resume?",
      answer:
        "Yes. You can upload your resume and our AI Resume Analyzer will provide ATS score, missing skills, and improvement suggestions.",
    },
    {
      question: "Will I receive project recommendations?",
      answer:
        "Absolutely! Based on your current skills, RoctVerse AI recommends beginner, intermediate, and advanced projects to strengthen your portfolio.",
    },
    {
      question: "Is my personal data secure?",
      answer:
        "Yes. Your data is securely stored, and we prioritize privacy using industry-standard security practices.",
    },
  ];

  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section 
     id="faq"
    className="bg-[#060B1A] py-28 text-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500 text-violet-300">
            Frequently Asked Questions
          </span>

          <h1 className="text-5xl font-bold mt-8">
            Got Questions?
            <span className="text-violet-500"> We've Answers</span>
          </h1>

          <p className="text-gray-400 mt-5">
            Everything you need to know about RoctVerse AI.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
className="bg-[#111827]
rounded-2xl
border
border-white/10
overflow-hidden
hover:border-violet-500
hover:shadow-xl
hover:shadow-violet-500/20
transition-all
duration-300"            >

              <button
                onClick={() => toggle(index)}
className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-all duration-300"              >

                <h2 className="text-lg font-semibold">
                  {faq.question}
                </h2>

                {active === index ? (
                  <ChevronUp className="text-violet-400" />
                ) : (
                  <ChevronDown className="text-violet-400" />
                )}

              </button>

              {active === index && (

                <div className="px-6 pb-6">

                  <p className="text-gray-400 leading-7">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}