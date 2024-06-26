import React from 'react'
import LabelUnderLine from '../../components/General/LabelUnderLine'

const AboutSection = () => {
  return (
    <div className='flex flex-col justify-around items-center text-center gap-4 p-8 text-primary bg-white md:text-left md:flex-row'>
      <div className='w-full flex flex-col justify-center gap-5 md:w-1/2'>
        <LabelUnderLine name='About'/>
        <p className='text-lg'> Hi there! I'm a passionate Web Developer currently pursuing a Bachelor's degree in Information Technology at Sri Sairam Institute of Technology, set to graduate in 2025. As a dedicated learner at NxtWave's CCBP 4.0 Academy, I'm diving deep into full-stack development and staying abreast of the latest tech trends. I've worked on numerous web development projects, creating elegant, responsive websites with practical experience in technologies like ReactJS, Tailwind CSS, and WordPress. My internship experience has given me valuable real-world exposure, enhancing my skills in building efficient, user-friendly web applications. Additionally, I have a solid foundation in data analysis and have explored artificial intelligence models, making me a versatile asset for any project. Let's connect and bring your vision to life with cutting-edge web solutions!</p>
      </div>
      <div>
        <img src="/images/About.jpg" alt="About" className='rounded-3xl' width={400}/>
      </div>
  </div>
  )
}

export default AboutSection