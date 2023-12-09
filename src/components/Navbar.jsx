import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);
    const handleClick = () => {
        setShowMobileNavbar(prevState => !prevState);
    };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 shadow-lg bg-white'>
        <img />
        <div>
            {/*web element*/}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>
                    <a href='https://github.com/patboy04'>
                        <FaGithub size={25}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/john-patrick-lacsamana-5392451ba/'>
                        <FaLinkedin size={25}/>
                    </a>
                </li>
            </ul>

            {/*mobile exclusive element*/}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {showMobileNavbar 
                    ? <ImCross size={30}/>
                    : <GiHamburgerMenu size={30}/>
                }
            </div>
            <ul className={showMobileNavbar ? "md:hidden bg-white absolute top-100 left-0 w-[100vw] h-[75vh] flex flex-col justify-center items-center" : "hidden"}>
                <li className='text-5xl py-4 hover:text-6xl duration-300'>Home</li>
                <li className='text-5xl py-4 hover:text-6xl duration-300'>About</li>
                <li className='text-5xl py-4 hover:text-6xl duration-300'>Projects</li>
                <li className='text-5xl py-4 hover:text-6xl duration-300'>Skills</li>
                <li className='text-5xl py-4 hover:text-6xl duration-300'>Contact</li>
                <div className='flex'>
                    <li>
                        <a href='https://github.com/patboy04' >
                            <FaGithub size={75}/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/john-patrick-lacsamana-5392451ba/'>
                            <FaLinkedin size={75} />
                        </a>
                    </li>
                </div>
            </ul>

        </div>  
    </div>

    
  )
}

export default Navbar