import React from 'react'
import MovingText from 'react-moving-text'
import myImg from "../assets/me.jpg"

const About = () => {

  const motto = "\"Never Stop Learning!\"".split(' ');

  const renderMotto = motto.map((letter, index) =>
  <MovingText
    key={index}
    type="pulse"
    duration="1000ms"
    delay="1s"
    direction="alternate"
    timing="ease-in-out"
    iteration="infinite"
    fillMode="both">
    {letter}
  </MovingText>)
  
  return (
    <div name='about' className='w-full min-h-screen bg-white flex flex-col justify-center xl:flex-row '>
        <img src={myImg} className='px-20 mt-32 self-center md:px-60 lg:w-[40vw] lg:p-0 lg:m-20'/>
        <div className='xl:py-20 xl:text-3xl xl:my-32'>
            <h1 className='text-2xl text-center mt-20 pb-10 text-[#059669] md:text-5xl lg:mt-0'>John Patrick M. Lacsamana</h1>
            <div className='flex gap-4 justify-center text-[#034c23] overflow-hidden'>
              {renderMotto}
            </div>
            <p className='text-sm px-5 pt-10 text-justify d:text-lg md:mx-20'>
              Hi! I'm John Patrick Lacsamana, 
              A Computer Science Graduate from the <span className='text-[#FCCC4C]'>University of Santo Tomas</span>. 
              I specialize in software and web development. I like building mobile and web-apps and I'm also interested in 
              Machine Learning.
            </p>
            <br></br>
            <p className='text-sm px-5 pb-10 text-justify md:text-lg md:mx-20'>
              I have always been a keen problem solver and I enjoy creating innovative solutions to problems regardless if its
              tech related or not. I believe that we should always keep on learning, whether it be learning new 
              technologies or honing my existing skillset.

            </p>
        </div>
    </div>
  )
}

export default About