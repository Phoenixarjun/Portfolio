import React from 'react'
import { motion } from 'framer-motion'
import LabelUnderLine from '../../components/General/LabelUnderLine'

const AboutSection = () => {
  return (
    <div className='flex flex-col justify-around items-center text-center gap-4 p-8 py-12 text-primary bg-gradient-to-b from-white to-[#EEEEEE] md:text-left md:flex-row'>
      <div className='w-full flex flex-col justify-center gap-5 md:w-1/2'>
        <LabelUnderLine name='About' />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className='text-base sm:text-lg'>
            I’ve always believed there’s a more elegant way to solve problems not by working harder, but by thinking sharper. From my earliest memories of tinkering with systems and dreaming up my own version of JARVIS, I’ve been drawn to the idea of creating things that feel magical yet purposeful. What began as curiosity turned into a mindset a way of viewing technology not just as tools, but as possibilities waiting to be shaped. That mindset led me to immerse myself in the art of building, designing, and refining digital systems that aren’t just functional, but intuitive.
          </p>
          <br />
          <p className='text-base sm:text-lg'>
            Today, I bring that same curiosity and discipline into every project I touch. <strong>I care deeply about clarity, efficiency, and impact</strong>. Whether it's designing a seamless interface or crafting a smart backend flow, my mission is simple: <strong>build things that work beautifully and solve real problems</strong>. I’m not here to just deliver code I’m here to help ideas evolve into experiences, and to be the kind of collaborator who listens deeply, iterates fast, and delivers with intention. Let’s create something meaningful together.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img src="/images/AboutImage.png" alt="About" className='rounded-3xl' width={400} />
      </motion.div>
    </div>
  )
}

export default AboutSection
