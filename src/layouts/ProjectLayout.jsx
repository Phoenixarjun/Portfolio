import React from 'react'
import TitleCard from '../components/ProjectsPage/TitleCard'
import TechnologyTabs from '../components/ProjectsPage/TechnologyTabs'
import ObjectivesBox from '../components/ProjectsPage/ObjectivesBox'


const ProjectLayout = ({ project }) => {
  return (
    <div className='relative flex flex-col gap-5'>
      <div>
        <TitleCard
          title={project.name} 
          description={project.description}
          cardImg ={project.cardImg}
        />
      </div>
      <div>
        <TechnologyTabs 
          technologies={project.technology}
        />
      </div>
      <div className='absolute bottom-0 right-5 top-1/2 -translate-y-6'>
        <ObjectivesBox 
          objectives={project.objectives}
        />
      </div>
    </div>
  )
}

export default ProjectLayout;