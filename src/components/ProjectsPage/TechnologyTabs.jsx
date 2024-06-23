import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import TechnologyBox from '../General/TechnologyBox'
import TechnologyContent from '../General/TechnologyContent'
const TechnologyTabs = ({technologies}) => {
  return (
    <div className='p-6 h-[40vh] flex flex-col justify-center text-black'>
      <Tabs.Root defaultValue="react" className='flex flex-col gap-5'>
        <Tabs.List className='flex gap-4'>
          {technologies.map((tech, index) => (
            <Tabs.Trigger key={index} value={index} className='p-2 px-4 bg-transparent rounded-2xl '>
              <TechnologyBox 
                techIcon={tech.techIcon}
                techName={tech.name}
              />
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {technologies.map((tech, index) => (
          <Tabs.Content key={index} value={index} className='p-2 px-4 w-1/2 rounded-2xl '> 
            <TechnologyContent 
              techDescription={tech.techDescription}
            /> 
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}

export default TechnologyTabs