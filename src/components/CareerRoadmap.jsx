import {
  Monitor,
  Code2,
  Database,
  Server,
  Rocket,
  Trophy,
} from "lucide-react";

export default function CareerRoadmap() {
  const roadmap = [
    {
      icon: <Monitor size={28} />,
      title: "HTML & CSS",
      desc: "Build beautiful and responsive websites.",
      status: "Completed",
      color: "text-green-400",
    },
    {
      icon: <Code2 size={28} />,
      title: "JavaScript",
      desc: "Master programming fundamentals.",
      status: "In Progress",
      color: "text-yellow-400",
    },
    {
      icon: <Code2 size={28} />,
      title: "React.js",
      desc: "Develop modern interactive web apps.",
      status: "Next",
      color: "text-gray-400",
    },
    {
      icon: <Server size={28} />,
      title: "Node & Express",
      desc: "Create scalable backend APIs.",
      status: "Upcoming",
      color: "text-gray-400",
    },
    {
      icon: <Database size={28} />,
      title: "MongoDB",
      desc: "Store and manage application data.",
      status: "Upcoming",
      color: "text-gray-400",
    },
    {
      icon: <Rocket size={28} />,
      title: "Full Stack Developer",
      desc: "Become industry ready with projects.",
      status: "Goal",
      color: "text-violet-400",
    },
  ];

  return (
    <section id="roadmap" className="bg-[#060B1A] py-28 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500 text-violet-300">
            AI Career Roadmap
          </span>

          <h1 className="text-5xl font-bold mt-8">
            Your Personalized
            <span className="text-violet-500">
              {" "}Learning Journey
            </span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            RoctVerse AI creates a personalized roadmap based on your
            current skills and dream career.
          </p>

        </div>

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-1 bg-violet-600 rounded-full"></div>

          <div className="space-y-12">

            {roadmap.map((item, index) => (

              <div
                key={index}
                className="relative flex items-start gap-8"
              >

                {/* Circle */}

                <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center z-10">

                  {item.icon}

                </div>

                {/* Card */}

                <div className="bg-[#111827]
border border-white/10
rounded-2xl
p-6
w-full
hover:border-violet-500
hover:shadow-2xl
hover:shadow-violet-500/20
hover:-translate-y-2
transition-all
duration-300">

                  <div className="flex justify-between items-center">

                    <h2 className="text-2xl font-semibold">
                      {item.title}
                    </h2>

                    <span className={`${item.color} font-semibold`}>
                      {item.status}
                    </span>

                  </div>

                  <p className="text-gray-400 mt-4">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Goal Card */}

        <div className="mt-24
bg-gradient-to-r
from-violet-700
to-indigo-700
rounded-3xl
p-10
flex
flex-col
lg:flex-row
justify-between
items-center
hover:scale-[1.02]
hover:shadow-2xl
hover:shadow-violet-500/30
transition-all
duration-300">

          <div>

            <h2 className="text-4xl font-bold">
              🎯 Final Destination
            </h2>

            <p className="text-violet-100 mt-4 text-lg">
              Full Stack Developer with AI, React, Node.js &
              MongoDB expertise.
            </p>

          </div>

          <div className="mt-8 lg:mt-0">

            <Trophy size={90} className="text-yellow-300" />

          </div>

        </div>

      </div>

    </section>
  );
}
