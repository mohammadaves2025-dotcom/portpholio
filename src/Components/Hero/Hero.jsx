import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-zinc-950 text-white 
      flex flex-col items-center justify-center 
      text-center px-4 sm:px-6 md:px-10"
    >

      {/* Image */}
      <img
        src="https://as1.ftcdn.net/v2/jpg/06/01/17/18/1000_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg"
        alt="profile"
        className="
        w-40 h-40 
        sm:w-52 sm:h-52 
        md:w-64 md:h-64 
        rounded-full 
        mb-6 mt-6
        object-cover 
        hover:scale-105 
        transition-transform duration-300 
        hover:shadow-lg hover:shadow-pink-500/50"
      />

      {/* Heading */}
      <h1 className="
        text-2xl 
        sm:text-3xl 
        md:text-5xl 
        lg:text-6xl 
        font-bold 
        leading-tight 
        max-w-4xl
      ">
        I&apos;m{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Mohammad Aves
        </span>
        <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          , MERN
        </span>{" "}
        <span className="block sm:inline text-2xl sm:text-3xl md:text-5xl">
          developer based in India.
        </span>
      </h1>

      {/* Description */}
      <p className="
        mt-6 
        text-gray-300 
        max-w-xl 
        text-sm 
        sm:text-base 
        md:text-lg
      ">
        MERN Developer exploring Generative AI to build smarter, AI-powered web
        applications, proficient in DSA and problem-solving.
      </p>

      {/* Buttons */}
      <div className="
        mt-8 
        flex 
        flex-col 
        sm:flex-row 
        gap-4 
        sm:gap-6 
        font-bold
      ">

        <a
          href="https://github.com/mohammadaves2025-dotcom"
          target="_blank"
          rel="noopener noreferrer"
          className="
          rounded-full 
          px-8 py-3 
          sm:px-10 sm:py-4
          text-sm sm:text-base
          hover:scale-105 
          transition
          bg-gradient-to-r from-purple-700 to-pink-600"
        >
          My Github
        </a>

        <button
          className="
          rounded-full 
          px-8 py-3 
          sm:px-10 sm:py-4
          text-sm sm:text-base
          bg-gradient-to-r from-purple-700 to-pink-500 
          hover:scale-105 
          transition"
        >
          My Resume
        </button>

      </div>

    </section>
  );
};

export default Hero;

