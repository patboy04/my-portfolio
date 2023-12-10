import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css-3.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import java from "../assets/java.png"
import mysql from "../assets/mysql.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#D1FAE5] flex py-20 flex-col'>
        <h1 className='text-center text-4xl sm:text-7xl py-8 text-[#059669]'>My Skills</h1>
        <div className='grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-14 md:gap-20 justify-items-center px-20 py-10'>
            <img src={html} className='w-28'/>
            <img src={css} className='w-28'/>
            <img src={js} className='w-28'/>
            <img src={react} className='w-28'/>
            <img src={java} className='w-28'/>
            <img src={mysql} className='w-28'/>
        </div>
    </div>
  )
}

export default Skills