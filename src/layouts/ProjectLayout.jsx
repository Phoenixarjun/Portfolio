import React from 'react'
import TitleCard from '../components/ProjectsPage/TitleCard'
import TechnologyTabs from '../components/ProjectsPage/TechnologyTabs'
import ObjectivesBox from '../components/ProjectsPage/ObjectivesBox'
import Screanshots from '../components/ProjectsPage/Screanshots'


const ProjectLayout = ({ project }) => {
  return (
    <div className='relative flex flex-col gap-20'>
      <div>
        <TitleCard
          title={project.name} 
          description={project.description}
          image ={project.image}
          link={project.linkToTheSite}
        />
      </div>
      <div>
        <TechnologyTabs 
          technologies={project.technology}
        />
      </div>
      <div className='absolute right-5 top-96 -translate-y-12'>
        <ObjectivesBox 
          objectives={project.objectives}
        />
      </div>
      <Screanshots screenshots={project.screanshots} />
    </div>
  )
}

export default ProjectLayout;