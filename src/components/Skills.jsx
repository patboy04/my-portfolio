import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css-3.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import java from "../assets/java.png"
import mysql from "../assets/mysql.png"
import firebase from "../assets/firebase.png"
import flutter from "../assets/flutter.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#D1FAE5] flex flex-col py-4 md:py-20'>
        <h1 className='text-center text-4xl sm:text-7xl py-2 md:py-8'>My Skills</h1>
        <div className='grid grid-cols-2 grid-rows-4 xl:grid-cols-4 xl:grid-rows-2 gap-6 lg:gap-y-10 justify-items-center px-16 lg:px-10 py-8 lg:py-5'>
            <div className='shadow-md shadow-[#059669] hover:scale-110 duration-500 p-2'>
                <img src={html} className='w-28'/>
                <h6>HTML</h6>
            </div>
            <div className='shadow-md shadow-[#059669] hover:scale-110 duration-500 p-2'>
                <img src={css} className='w-28'/>
                <h6>CSS</h6>
            </div>
            <div className='shadow-md shadow-[#059669] hover:scale-110 duration-500 p-2'>
                <img src={js} className='w-28'/>
                <h6>JAVASCRIPT</h6>
            </div>
            <div className='shadow-md shadow-[#059669] hover:scale-110 duration-500 p-2'>
                <img src={react} className='w-28'/>
                <h6>REACT</h6>
            </div>
            <div className='shadow-md shadow-[#059669] hover:scale-110 duration-500 p-2'>
                <img src={firebase} className='w-28'/>
                <h6>Firebase</h6>
            </div>
            <div className='shadow-md shadow-[#059669] hover:scale-110 duration-500 p-2'>
                <img src={java} className='w-28'/>
                <h6>Java</h6>
            </div>
            <div className='shadow-md shadow-[#059669] hover:scale-110 duration-500 p-2'>
                <img src={flutter} className='w-28'/>
                <h6>Flutter</h6>
            </div>
            <div className='shadow-md shadow-[#059669] hover:scale-110 duration-500 p-2'>
                <img src={mysql} className='w-28'/>
                <h6>MYSQL</h6>
            </div>
        </div>
    </div>
  )
}

export default Skills