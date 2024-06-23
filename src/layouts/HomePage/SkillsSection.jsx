import React from 'react'
import LabelUnderLine from '../../components/General/LabelUnderLine'
import SkillLevel from '../../components/HomePage/SkillLevel'

const SkillsSection = () => {
  const skills = [
    {
      name: 'HTML',
      color: 'black',
      level: '80'
    },
    {
      name: 'CSS',
      color: 'cyan',
      level: '50'
    },
    {
      name: 'JavaScript',
      color: 'blue',
      level: '60'
    },
    {
      name: 'React',
      color: 'red',
      level: '70'
    },
    {
      name: 'Node.js',
      color: 'green',
      level: '65'
    },
    {
      name: 'Node.js',
      color: 'orange',
      level: '85'
    }
  ]
  return (
    <div className='flex flex-col px-8 mt-20 h-96 gap-10'>
      <LabelUnderLine name='Skills'/>
      <div className='flex flex-wrap gap-5 items-center justify-center'>
        {skills.map((skill, index) => (
          <SkillLevel 
            key={index} 
            name={skill.name} 
            color={skill.color} 
            level={skill.level} 
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsSection