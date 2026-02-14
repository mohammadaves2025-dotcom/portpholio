import React from "react";

const services = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    desc: "Building responsive and scalable web applications using MERN stack with clean UI and optimized backend.",
    border: "hover:border-emerald-400",
  },
  {
    id: "02",
    title: "Frontend UI / UX Design",
    desc: "Modern, user-friendly interfaces using React, Tailwind CSS, animations, and accessibility best practices.",
    border: "hover:border-green-400",
  },
  {
    id: "03",
    title: "Backend & API Development",
    desc: "REST APIs, authentication, database design, and server-side logic using Node.js, Express, and MongoDB.",
    border: "hover:border-teal-400",
  },
  {
    id: "04",
    title: "DSA & Problem Solving",
    desc: "Strong foundation in Data Structures & Algorithms with a problem-solving approach using C++ and JavaScript.",
    border: "hover:border-lime-400",
  },
  {
    id: "05",
    title: "Engineering + Tech Projects",
    desc: "Combining Electrical & Computer Engineering knowledge with software to build real-world tech solutions.",
    border: "hover:border-emerald-300",
  },
  {
    id: "06",
    title: "Learning & Innovation",
    desc: "Constantly learning new technologies, experimenting with ideas, and improving through hands-on projects.",
    border: "hover:border-green-300",
  },
];

const Myservices = () => {
  return (
    <section
      id="services"
      className="bg-zinc-950 text-white w-full py-16 sm:py-20 px-4 sm:px-6 md:px-12"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
          My{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Services
          </span>
        </h1>

        <p className="text-zinc-300 leading-relaxed mt-6 text-sm sm:text-base md:text-lg">
          I am currently a 2nd-year B.Tech student in Electrical and Computer
          Engineering at{" "}
          <span className="font-semibold text-white">
            Jamia Millia Islamia, New Delhi
          </span>
          . Alongside my academics, I actively focus on full-stack web
          development and problem-solving using Data Structures and Algorithms.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
          <div className="px-6 py-4 rounded-xl bg-zinc-900 hover:scale-105 transition text-center">
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              2nd Year
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">B.Tech Student</p>
          </div>

          <div className="px-6 py-4 rounded-xl bg-zinc-900 hover:scale-105 transition text-center">
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-lime-500 bg-clip-text text-transparent">
              8.82
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">Current SPI</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className={`group rounded-2xl border border-zinc-800 p-6 sm:p-8
            hover:bg-gradient-to-br hover:from-green-900/30 hover:to-emerald-900/20
            transition-all duration-300 hover:scale-105 ${service.border}`}
          >
            <h2 className="text-sm sm:text-base font-semibold text-zinc-400">
              {service.id}
            </h2>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-3 
              bg-gradient-to-r from-green-400 to-emerald-500 
              bg-clip-text text-transparent 
              group-hover:text-white">
              {service.title}
            </h3>

            <p className="text-zinc-300 mt-4 leading-relaxed text-sm sm:text-base">
              {service.desc}
            </p>

            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-green-400 group-hover:text-green-300 cursor-pointer">
              Explore More →
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Myservices;

