import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


const Navbar = () => {
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);
    const handleClick = () => {
        setShowMobileNavbar(prevState => !prevState)
    }

  return (
    
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 shadow-lg bg-white'>
        <img />
        <div>
            {/*web element*/}
            <ul className='hidden md:flex '>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>
            
            {/*mobile exclusive element*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {showMobileNavbar 
                    ? <ImCross />
                    : <GiHamburgerMenu />
                }
            </div>
            <ul className={showMobileNavbar ? "md:hidden absolute top-100 left-0 w-[100vw] h-[75vh] flex flex-col justify-center items-center" : "hidden"}>
                <li className='text-5xl py-5 hover:text-6xl'>Home</li>
                <li className='text-5xl py-5 hover:text-6xl'>About</li>
                <li className='text-5xl py-5 hover:text-6xl'>Skills</li>
                <li className='text-5xl py-5 hover:text-6xl'>Projects</li>
                <li className='text-5xl py-5 hover:text-6xl'>Contact Me</li>
            </ul>

        </div>  
    </div>

    
  )
}

export default Navbar