import React from 'react'
import { Link } from 'react-router-dom';
import AmazonPrimeClone from '/images/AmazonPrimeClone.png'
import WebDevelopment from '/logo/WebDevelopment.jpg'
const ProjectCard = ( {title , shortDescription, projectId} ) => {
  return (
    <div className='w-72 h-full relative shadow-xl rounded-2xl'>
      <div className='w-20 rounded-full absolute top-20 translate-x-28 translate-y-4'>
        <img src={WebDevelopment} alt="WebDev" width={70} className='rounded-full border-4 border-secondary'/>
      </div>
      <div>
        <img src={AmazonPrimeClone} alt="AmazonPrimeClone" className='w-full rounded-2xl rounded-b-none' />
      </div>
      <div className='p-3 py-8 flex flex-col gap-2'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-sm'>{shortDescription}</p>
        <Link to={`/project/${projectId}`}>
          <button className='font-semibold underline underline-offset-2'>View Project</button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard