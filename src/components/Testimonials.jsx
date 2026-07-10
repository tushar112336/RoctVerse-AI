import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      review:
        "RoctVerse AI helped me identify my weak skills and provided a perfect roadmap. I got my internship within 3 months!",
    },
    {
      name: "Priya Verma",
      role: "BCA Student",
      review:
        "The AI Resume Analyzer improved my ATS score from 62% to 91%. Amazing platform for students.",
    },
    {
      name: "Arjun Singh",
      role: "Full Stack Learner",
      review:
        "The dashboard and AI assistant make learning so easy. It feels like having a personal mentor.",
    },
  ];

  return (
    <section  id="testimonials" className="bg-[#0B1120] py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500 text-violet-300">
            Testimonials
          </span>

          <h1 className="text-5xl font-bold mt-8">
            Loved by
            <span className="text-violet-500"> Students</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Thousands of learners are improving their careers with
            RoctVerse AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {reviews.map((item, index) => (

            <div
              key={index}
className="bg-[#111827]
rounded-3xl
border
border-white/10
p-8
hover:border-violet-500
hover:shadow-2xl
hover:shadow-violet-500/20
hover:-translate-y-3
hover:scale-[1.02]
transition-all
duration-300"            >

              <div className="flex gap-1 text-yellow-400 mb-6">

                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>
                <Star fill="currentColor" size={18}/>

              </div>

              <p className="text-gray-300 leading-8">
                "{item.review}"
              </p>

             <div className="mt-8 flex items-center gap-4">

  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-xl font-bold">

    {item.name.charAt(0)}

  </div>

  <div>

    <h2 className="font-bold text-xl">
      {item.name}
    </h2>

    <p className="text-violet-400">
      {item.role}
    </p>

  </div>

</div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}