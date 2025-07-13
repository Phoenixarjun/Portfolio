import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import {
  PiGraduationCapDuotone,
  PiBriefcaseDuotone,
  PiMapPinDuotone,
  PiBookDuotone
} from 'react-icons/pi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import ParticlesBg from '../../components/General/ParticlesBg'

const educationInfo = [
  { icon: <PiGraduationCapDuotone />, label: 'Graduate on 2025' },
  { icon: <PiBriefcaseDuotone />, label: 'B Tech (Bachelor of Technology)' },
  { icon: <PiBookDuotone />, label: 'Information Technology (IT)' },
  { icon: <PiMapPinDuotone />, label: 'Chennai' }
]

const HeroSection = () => {
  return (
    <div className='relative h-[150vh] md:h-[99vh]'>
      <ParticlesBg />
      <div className='relative z-10 flex flex-col-reverse md:flex-row items-center justify-around gap-8 h-full px-6 py-10 md:px-16'>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='flex flex-col items-center md:items-start text-white gap-4 max-w-xl'
        >
          <h2 className='text-xl sm:text-3xl'>Hello, I'm</h2>
          <h1 className='outlined-text text-4xl sm:text-6xl font-bold'>NARESH B A</h1>
          <span className='text-tertiary text-lg sm:text-2xl font-mono'>
            <Typewriter
              words={[
                'Full Stack Developer',
                'AI/ML Engineer',
                'Generative AI Developer',
                'Data Analyst',
                'MLOps & LLMOps Engineer',
                'Computer Vision Developer'
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>

          <div className='mt-6 flex flex-col gap-3 text-white text-base sm:text-lg'>
            {educationInfo.map(({ icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='flex items-center gap-3'
              >
                <div className='text-xl'>{icon}</div>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href='https://drive.google.com/file/d/1Rvmc7fboNMR1CklFDANsSkI5UnvlpzJZ/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='mt-6 inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-medium shadow-lg hover:bg-gray-200 transition duration-300'
          >
            <IoDocumentTextOutline className='text-xl' />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='relative group rounded-full shadow-md shadow-white  overflow-hidden w-64 h-64 sm:w-72 sm:h-72 border-4 border-white/10'
        >
          <img
            src='/images/Profile2.png'
            alt='Naresh B A'
            className='w-full h-full object-cover object-top rounded-full transition duration-300 group-hover:scale-105 group-hover:rotate-1'
          />
          <div className='absolute inset-0 rounded-full ring-4 ring-white/20 group-hover:ring-tertiary/60 transition-all duration-300'></div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
