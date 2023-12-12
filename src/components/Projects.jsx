import React from 'react'
import projects from "../data.js"

const Projects = () => {
  const renderProjects = projects.map(project => {
    return (
      <div className='h-screen p-10 mb-10 sm:p-16 sm:m-16 shadow-lg'>
        <img className="" src={project.image}/>
        <h1 className='text-2xl sm:4-xl xl:text-5xl font-medium'>{project.name}</h1>
        <div className='mt-5'>
          <p className='text-xs sm:text-base xl:text-lg'>{project.date}</p>
          <p className='text-sm sm:text-lg xl:text-xl font-light mt-2'>{project.description}</p>
        </div>
      </div>
    )
  });

  console.log(renderProjects)

  return (
    <div name='projects' className='w-full min-h-screen flex flex-col p-4 md:py-20'>
      <h1 className='text-center text-4xl sm:text-7xl py-2 md:py-8 text-[#059669]'>Projects</h1>
      <div className='grid grid-cols-1 grid-rows-4' >
        {renderProjects}
      </div>
    </div>
  )
}

export default Projects