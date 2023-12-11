import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen bg-[#D1FAE5]'>
        <div className='w-full h-screen mx-auto px-8 flex flex-col justify-center'>
            <h1 className='text-4xl sm:text-7xl py-4'>Hi! I'm Patrick</h1>
            <h2 className='text-lg sm:text-3xl py-3'>I have a passion for</h2>
            <h1 className='text-4xl sm:text-7xl sm:max-w-[60vw] text-[#059669] py-4'>Software and Web Development</h1>
            <div>
              <Link to="about" smooth={true} duration={500} >
                <button className='w-[150px] border-2 border-[#059669] rounded-lg py-4 my-4 flex justify-center items-center gap-2 hover:bg-[#059669] hover:scale-110 duration-200'>
                  About Me 
                  <CiCircleInfo size={30}/>
                </button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Home