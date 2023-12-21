import React from 'react'
import projects from "../data.js"
import { FaHtml5, FaReact, FaJava, FaPython } from "react-icons/fa";   
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiDart, SiFlutter, SiNumpy, SiJupyter } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { RiNotionFill } from "react-icons/ri";

const Projects = () => {
  const renderProjects = projects.map(project => {
    return (
      <div key={project.name} className='p-10 mb-10 sm:p-16 sm:m-16 shadow-lg flex flex-col xl:flex-row'>
        <img src={project.image}/>
        <div className='flex flex-col xl:mx-10 '>
          <h1 className='text-2xl sm:4-xl xl:text-5xl font-medium'>{project.name}</h1>
          <p className='text-xs sm:text-base xl:text-lg mt-5'>{project.date}</p>
          <p className='text-sm sm:text-lg xl:text-xl font-light mt-2'>{project.description}</p>
          <p className='text-sm sm:text-lg xl:text-xl font-bold my-2 '>{project.role}</p>
          <div className='grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-10 sm:gap-x-20 mt-10 xl:mt-auto'>
            {project.tech.map((tech, index) => {
              let icon;
              switch (tech) {
                case 'html':
                  icon = <FaHtml5 key={index} size={60}/>;
                  break;
                case 'css':
                  icon = <FaCss3Alt key={index} size={60}/>;
                  break;
                case 'js':
                  icon = <IoLogoJavascript key={index} size={60}/>;
                  break;
                case 'react':
                  icon = <FaReact key={index} size={60}/>;
                  break;
                case 'java':
                  icon = <FaJava key={index} size={60}/>;
                  break;
                case 'mysql':
                  icon = <SiMysql key={index} size={60}/>;
                  break;
                case 'heroku':
                  icon = <GrHeroku key={index} size={60}/>;
                  break;
                case 'notion':
                  icon = <RiNotionFill key={index} size={60}/>;
                  break;
                case 'flutter':
                  icon = <SiFlutter key={index} size={60}/>;
                  break;
                case 'dart':
                  icon = <SiDart key={index} size={60}/>;
                  break;
                case 'python':
                  icon = <FaPython key={index} size={60}/>;
                  break;
                case 'numpy':
                  icon = <SiNumpy key={index} size={60}/>;
                  break;
                case 'jupyter':
                  icon = <SiJupyter key={index} size={60}/>;
                  break;
              }
              return icon;
            })}
          </div>
        </div>
      </div>
    )
  });

  return (
    <div name='projects' className='w-full min-h-screen flex flex-col p-4 md:py-20'>
      <h1 className='text-center text-4xl sm:text-7xl py-2 md:py-8'>Projects</h1>
      <div className='grid grid-cols-1 grid-rows-4' >
        {renderProjects}
      </div>
    </div>
  )
}

export default Projects