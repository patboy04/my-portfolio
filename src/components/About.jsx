import React from 'react'
import myImg from "../assets/me.jpg"

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-white flex flex-col justify-center lg:flex-row '>
        <img src={myImg} className='px-20 mt-32 self-center md:px-60 lg:w-[40vw] lg:p-0 lg:m-20'/>
        <div className='lg:py-20 lg:pt-40 lg:text-3xl lg:my-32'>
            <h1 className='text-2xl text-center mt-20 pb-10 text-[#059669] md:text-5xl lg:mt-0'>John Patrick M. Lacsamana</h1>
            <p className='text-base p-1 pb-10 text-center text-[#059669] md:text-xl md:mx-20 lg:mx-2 lg:text-2xl '>Hi! I'm John Patrick Lacsamana, A Computer Science Graduate from the University 
                of Santo Tomas. I specialize in software and web development. I like building mobile and web-apps and I'm also interested in 
                Machine Learning </p>
        </div>
    </div>
  )
}

export default About