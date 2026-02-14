import React from 'react'

const Work = () => {
  return (
    <section id='work' className='bg-zinc-950 w-full py-16 sm:py-20 px-4 sm:px-6 md:px-12'>

      {/* Heading */}
      <h1 className='
        text-3xl sm:text-4xl md:text-6xl 
        text-green-500 
        font-extrabold 
        text-center
      '>
        <span className='text-white'>My</span> Latest Work
      </h1>

      {/* Projects Grid */}
      <div className='
        mt-12 sm:mt-16
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 
        max-w-6xl 
        mx-auto
      '>

        {[
          "https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg",
          "https://greatstack.in/portfolio/assets/project_2-ko3fLZz-.svg",
          "https://greatstack.in/portfolio/assets/project_3-G9x9U39U.svg",
          "https://greatstack.in/portfolio/assets/project_4-KRxErSUy.svg",
          "https://greatstack.in/portfolio/assets/project_5-u53cBB9v.svg",
          "https://greatstack.in/portfolio/assets/project_6-VGGcxYRF.svg",
        ].map((img, index) => (
          <div 
            key={index} 
            className='rounded-xl overflow-hidden hover:scale-105 transition duration-300'
          >
            <img 
              src={img} 
              alt="project" 
              className='w-full h-48 sm:h-56 md:h-60 object-cover'
            />
          </div>
        ))}

      </div>

      {/* Button */}
      <div className='flex justify-center mt-12'>
        <button className='
          px-6 sm:px-8 
          py-2 sm:py-3 
          bg-green-500 
          font-extrabold 
          text-base sm:text-lg 
          text-white 
          rounded-full 
          hover:scale-105 
          transition
        '>
          Show More
        </button>
      </div>

    </section>
  )
}

export default Work

