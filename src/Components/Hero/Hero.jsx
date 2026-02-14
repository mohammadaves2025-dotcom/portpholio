import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <section id="home" className="hero h-full bg-zinc-950 text-white flex flex-col items-center justify-center text-center px-6 ">

      {/* Image */}
      <img
        src="https://as1.ftcdn.net/v2/jpg/06/01/17/18/1000_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg"
        alt="profile"
        className="w-82 h-82 rounded-full mb-6 object-cover mt-14 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-pink-500/50  "
      />

      {/* Text */}
      <h1 className="text-4xl md:text-6xl font-bold leading-none max-w-4xl ">
        I&apos;m{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Mohammad Aves
        </span>
        <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          , MERN
        </span>{" "}
       <span className="text-5xl "> developer based in India.</span>
      </h1>

      <p className="mt-6 text-gray-300 max-w-2xl">
        MERN Developer exploring Generative AI to build smarter, AI-powered web
        applications, proficient in DSA and problem-solving.
      </p>

      <div className="mt-10 flex gap-6 font-bold">
        <a href="https://github.com/mohammadaves2025-dotcom" target="_blank" className="rounded-full px-10 py-4  hover:scale-105 bg-gradient-to-r from-purple-700 to-pink-600">
                        My Github
        </a>

        <button className="rounded-full px-8 py-4 bg-gradient-to-r from-purple-700 to-pink-500 hover:scale-105 transition">
          My Resume
        </button>
      </div>

    </section>
  );
};

export default Hero;

