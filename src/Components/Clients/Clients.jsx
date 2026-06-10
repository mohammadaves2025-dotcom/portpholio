import React from 'react';
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";
import { assets } from '../../assets/assets.js';

const clients = [
  {
    title: "T&T Office Solution Website",
    client: "T&T Office Solution",
    industry: "E-commerce · Office Supplies",
    role: "Full Stack Developer",
    tags: ["React", "Vite", "Tailwind v4", "Framer Motion"],
    img: assets.ttsoln,
    status: "Live",
    quote: "The design exceeded every expectation — premium, modern, and delivered incredibly fast.",
    link: "https://www.ttofficesolutions.in/",
    github: "https://github.com/mohammadaves2025-dotcom/ttSolutions",
  },
  {
    title: "The Orbis Journal Website",
    client: "The Orbis Journal",
    industry: "Publishing · Media Company . News Agency",
    role: "Full Stack Developer",
    tags: ["React", "TypeScript", "Express", "MongoDB"],
    img: assets.orbis2,
    status: "Live",
    quote: "Clean code, fast turnaround, and he handled every bug without complaint. Highly recommend.",
    link: "https://the-asr-1m9a.vercel.app/",
    github: "https://github.com/mohammadaves2025-dotcom/The_Asr",
  },
  {
    title: "JCS Admissions Platform",
    client: "Jamia Consultancy Services",
    industry: "Education · Admissions",
    role: "Full Stack Developer",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    img: assets.jcs,
    status: "Live",
    quote: "Mohammad built exactly what we needed — a complete platform from scratch, on time and without hassle.",
    link: "https://www.jamiaconsultancyservices.in/",
    github: "https://github.com/mohammadaves2025-dotcom/JCS_FullStack",
  },
  
];

const StatusBadge = ({ status }) => {
  const isLive = status === "Live";
  return (
    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
      isLive
        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
        : "bg-amber-500/10 text-amber-400 border-amber-500/30"
    }`}>
      {isLive ? "● Live" : "◐ In Progress"}
    </span>
  );
};

const Clients = () => {
  return (
    <section id="clients" className="bg-zinc-950 w-full py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-purple-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 text-center">
            // Freelance Work
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-black tracking-tighter text-center">
            Client{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent italic">
              Deliverables.
            </span>
          </h1>
          <p className="mt-5 text-zinc-400 text-base sm:text-lg text-center max-w-xl leading-relaxed">
            Real projects. Real clients. Shipped and deployed.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((c, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 flex flex-col"
            >
              {/* Screenshot — zoom on hover */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Status badge over image */}
                <div className="absolute top-3 right-3">
                  <StatusBadge status={c.status} />
                </div>
                {/* Bottom gradient fade into card body */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>

              {/* Card Body — always visible */}
              <div className="flex flex-col flex-1 p-6">

                {/* Industry + client name */}
                <p className="text-purple-400 font-bold text-[10px] uppercase tracking-widest mb-1">
                  {c.industry}
                </p>
                <h3 className="text-xl font-black text-white mb-0.5">{c.title}</h3>
                <p className="text-zinc-500 text-xs mb-4 font-mono">— {c.client}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Testimonial quote */}
                <blockquote className="border-l-2 border-purple-500/60 pl-3 mb-6 flex-1">
                  <p className="text-zinc-400 text-xs italic leading-relaxed group-hover:text-zinc-300 transition-colors">
                    "{c.quote}"
                  </p>
                  <footer className="text-zinc-600 text-[10px] mt-1.5 font-mono">
                    — {c.client}
                  </footer>
                </blockquote>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500 text-white text-xs font-bold hover:bg-purple-400 transition-colors"
                  >
                    <HiOutlineExternalLink size={14} /> Live Site
                  </a>
                  <a
                    href={c.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-xs font-bold hover:bg-zinc-700 transition-colors border border-zinc-700"
                  >
                    <HiOutlineCode size={14} /> Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;