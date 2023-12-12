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
    <div className='fixed w-full h-[80px] z-50 flex justify-between items-center px-4 shadow-lg bg-white'>
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
                    <Link to="about" smooth={true} duration={500} offset={25}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500} offset={200}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
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
            <ul className={showMobileNavbar ? "md:hidden bg-white absolute top-100 left-0 w-[100vw] h-[100vh] flex flex-col justify-center items-center" : "hidden"}>
                <li className='text-5xl py-4 hover:text-6xl duration-300'>
                    <Link to="home" onClick={handleClick} smooth={true} duration={1000}>
                        Home
                    </Link>
                </li>
                <li className='text-5xl py-4 hover:text-6xl duration-300'>
                    <Link to="about" onClick={handleClick} smooth={true} duration={1000}>
                        About
                    </Link>
                </li>
                <li className='text-5xl py-4 hover:text-6xl duration-300'>
                    <Link to="skills" onClick={handleClick} smooth={true} duration={1000}>
                        Skills
                    </Link>
                </li>
                <li className='text-5xl py-4 hover:text-6xl duration-300'>
                    <Link to="projects" onClick={handleClick} smooth={true} duration={1000}>
                        Projects
                    </Link>
                </li>
                <li className='text-5xl py-4 hover:text-6xl duration-300'>
                    <Link to="contact" onClick={handleClick} smooth={true} duration={1000}>
                        Contact
                    </Link>
                </li>
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