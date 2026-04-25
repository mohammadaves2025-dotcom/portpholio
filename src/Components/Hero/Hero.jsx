import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      {/* Image with Animated Gradient Border */}
      <div className="relative group mb-8">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full p-1 bg-zinc-900 overflow-hidden">
          <img
            src="https://as1.ftcdn.net/v2/jpg/06/01/17/18/1000_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg"
            alt="Mohammad Aves Profile"
            className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] max-w-5xl">
        I'm{" "}
        <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Mohammad Aves,
        </span>
        <br />
        <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
          Full-Stack
        </span>{" "}
        Developer.
      </h1>

      {/* Description */}
      <p className="mt-8 text-zinc-400 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed font-medium">
        Specializing in the <span className="text-zinc-100 font-semibold text-emerald-400">MERN Stack</span> and
        integrating <span className="text-zinc-100 font-semibold text-purple-400 italic">Generative AI</span> to
        build the next generation of intelligent web systems.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
        <a
          href="https://github.com/mohammadaves2025-dotcom"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            My Github
          </span>
          <div className="absolute inset-0 bg-emerald-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
        </a>

        <a
          href="https://drive.google.com/file/d/1CrfIP4ZguQA_gJP7Uqs_5jNUJJPGrKxp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-full transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-700 hover:scale-105 active:scale-95 text-center"
        >
          My Resume
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;