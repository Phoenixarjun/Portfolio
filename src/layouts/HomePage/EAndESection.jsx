import React from 'react'
import TimeLineCard from '../../components/HomePage/TimeLineCard'
import LabelUnderLine from '../../components/General/LabelUnderLine'


const EAndESection = () => {
  const education = [
    {
      heading: 'Master In CSE',
      subHeading: 'Cambridge university',
      year: '2000 - 2050',
      description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam',
      position: 'first'
    },
    {
      heading: 'Master In CSE',
      subHeading: 'Cambridge university',
      year: '2000 - 2050',
      description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam'
    },
    {
      heading: 'Master In CSE',
      subHeading: 'Cambridge university',
      year: '2000 - 2050',
      description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam',
      position: 'last'
    },
  ]
  const expericence = [
    {
      heading: 'Master In CSE',
      subHeading: 'Cambridge university',
      year: '2000 - 2050',
      description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam',
      position: 'first'
    },
    {
      heading: 'Master In CSE',
      subHeading: 'Cambridge university',
      year: '2000 - 2050',
      description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam'
    },
    {
      heading: 'Master In CSE',
      subHeading: 'Cambridge university',
      year: '2000 - 2050',
      description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam',
      position: 'last'
    },
  ]
  return (
    <div className='flex flex-col justify-center py-10 px-8'>
      <LabelUnderLine name='Education And Experience'/>
      <div className='flex py-5 mt-10 gap-2'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-semibold mb-5'>My Education</h1>
          <div className='flex flex-col'>
            {education.map((edu, index) => (
              <TimeLineCard 
                key={index} 
                heading={edu.heading}
                subHeading={edu.subHeading}
                year={edu.year}
                description={edu.description}
                position={edu.position}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold mb-5'>My Expericence</h1>
          <div className='flex flex-col'>
            {expericence.map((exp, index) => (
              <TimeLineCard 
                key={index} 
                heading={exp.heading}
                subHeading={exp.subHeading}
                year={exp.year}
                description={exp.description}
                position={exp.position}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EAndESection