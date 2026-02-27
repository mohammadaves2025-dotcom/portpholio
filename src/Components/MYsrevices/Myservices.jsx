import React from "react";
import { HiOutlineCode, HiOutlineColorSwatch, HiOutlineDatabase, HiOutlineTerminal, HiOutlineChip, HiOutlineLightBulb } from "react-icons/hi";

const services = [
  {
    id: "01",
    title: "Full-Stack MERN",
    desc: "Architecting robust end-to-end applications with MongoDB, Express, React, and Node.js.",
    icon: <HiOutlineCode />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "02",
    title: "UI / UX Design",
    desc: "Designing pixel-perfect, accessible interfaces with Tailwind CSS and Framer Motion animations.",
    icon: <HiOutlineColorSwatch />,
    color: "from-pink-500 to-purple-500",
  },
  {
    id: "03",
    title: "API Architect",
    desc: "Designing secure, scalable RESTful APIs and managing complex database schemas with ease.",
    icon: <HiOutlineDatabase />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "04",
    title: "DSA Expert",
    desc: "Solving complex computational problems using optimized data structures in C++ and JS.",
    icon: <HiOutlineTerminal />,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "05",
    title: "Hardware + Software",
    desc: "Leveraging Electrical Engineering foundations to bridge the gap between silicon and software.",
    icon: <HiOutlineChip />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "06",
    title: "AI Integration",
    desc: "Experimenting with LLMs and Generative AI to create smarter, self-evolving web experiences.",
    icon: <HiOutlineLightBulb />,
    color: "from-lime-400 to-emerald-500",
  },
];

const Myservices = () => {
  return (
    <section id="work" className="relative bg-zinc-950 text-white py-24 px-6 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
              // Professional Services
            </h2>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
              What I <span className="text-zinc-500 underline decoration-emerald-500/50">Bring</span> To The Table.
            </h1>
          </div>
          
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-500"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl text-white mb-6 shadow-lg shadow-emerald-500/10 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
                  {service.desc}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-600 group-hover:text-emerald-500/50 transition-colors">
                        SRV_{service.id}
                    </span>
                    <button className="text-sm font-bold text-zinc-500 group-hover:text-white flex items-center gap-2 transition-all">
                        Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Myservices;