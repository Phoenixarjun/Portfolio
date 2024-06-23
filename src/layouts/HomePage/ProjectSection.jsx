import React from 'react'
import ProjectCard from '../../components/HomePage/ProjectCard'
import LabelUnderLine from '../../components/General/LabelUnderLine'
import Data from "../../project"
import { Link } from 'react-router-dom'
import { CgMoreO } from "react-icons/cg";


const ProjectSection = () => {
  return (
    <div className='flex flex-col justify-center py-10 px-8 gap-10'>
      <LabelUnderLine name='Projects'/>
      <div className='flex flex-wrap gap-3 justify-center items-center'>
        {Data.slice(0,3).map((item, index) => (
          <ProjectCard 
            key={index}
            projectId={item.id}
            title={item.name}
            shortDescription={item.shortDescription}
            cardImg={item.cardImg}
            />
        ))}
        <ManyMoreCard />
      </div>
    </div>
  )
}


const ManyMoreCard = () => {
  return (
    <div className='flex flex-col items-center justify-center shadow-xl rounded-2xl h-80 w-72'>
      <CgMoreO className='text-3xl'/>
      <h2 className='text-2xl font-bold'>Many More Projects</h2>
      <Link to={"/certifications"}>
        <button className='font-semibold underline underline-offset-2'>View All Projects</button>
      </Link>
    </div>
  )
}

export default ProjectSection