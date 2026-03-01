import React from 'react'

const Hero = () => {

  return (
    <>
      <div className='w-full pt-32 md:pt-40'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-balance font-bold text-center '>Boost Your Digital Presence with design that drive results</h1>
        <h2 className='text-center text-sm md:text-lg pt-4'>{"I'm a Frontend Developer ready to build your next idea"}</h2>
        <div className="text-center pt-4">
          <button className="px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
            {"Let's Talk"}
          </button>
          
        </div>
      </div>
    </>

  )
}

export default Hero
