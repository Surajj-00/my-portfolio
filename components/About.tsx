import Spline from '@splinetool/react-spline'
import React from 'react'

const About = () => {
  return (
    <>
      <div className='w-full h-screen flex flex-col-reverse items-center justify-center md:flex md:flex-row'>
        <div className="w-full">
          <h3 className='text-4xl pb-4 font-bold'>About me :</h3>
          <p className="w-full text-lg">
            I'm a passionate frontend developer who believes great websites should be both beautiful and functional. With expertise in React, JavaScript, and modern CSS frameworks, I transform creative designs into seamless digital experiences. When I'm not crafting pixel-perfect interfaces, you'll find me exploring the latest web technologies and optimizing user journeys. I thrive on turning complex problems into elegant solutions that users love and businesses rely on.
          </p>
        </div>
        <div className="w-full h-screen md:h-3/4">
          <Spline
            scene="https://prod.spline.design/LUkWEkxFdpdO9Jeu/scene.splinecode"
          />
        </div>
      </div>
    </>

  )
}

export default About
