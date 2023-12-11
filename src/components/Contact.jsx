import React from 'react'
import { IoDocumentText } from "react-icons/io5";

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#D1FAE5] flex flex-col justify-center items-center py-4 md:py-20'>
        <h1 className='text-2xl sm:text-4xl'>Contact Me!</h1>
        <button className='w-[200px] md:w-[35vw] text-sm md:text-2xl border-2 border-[#059669] rounded-lg p-4 my-4 flex justify-center items-center gap-2 hover:bg-[#059669] hover:scale-110 duration-200'>
            Download my CV
            <IoDocumentText size={30}/>
        </button>
    </div>
  )
}

export default Contact