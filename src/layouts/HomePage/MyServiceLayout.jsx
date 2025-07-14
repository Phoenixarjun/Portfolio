import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../../components/HomePage/ServiceCard'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const MyServiceLayout = () => {
  const services = [
    {
      name: 'Full Stack Web Development',
      description: 'Building complete, responsive, and scalable web applications for your business.',
      img: './logo/webDevelopment.png'
    },
    {
      name: 'Data Analytics & Visualization',
      description: 'Transforming raw data into actionable insights with stunning dashboards and reports.',
      img: './logo/dataAnalysis.png'
    },
    {
      name: 'AI & Machine Learning Solutions',
      description: 'Creating smart AI models that learn, predict, and drive better outcomes.',
      img: './logo/machineLearning.png'
    },
    {
      name: 'Generative AI & Custom Chatbots',
      description: 'Building AI-powered tools, chatbots, and automation tailored to your needs.',
      img: './logo/artificialIntelligence.png'
    },
    {
      name: 'Cloud Deployment & DevOps',
      description: 'Deploying, scaling, and managing apps with Docker, Kubernetes, and cloud platforms.',
      img: './logo/Cloud.png'
    }
  ]

  return (
    <div className='flex flex-col gap-12 items-center justify-center py-20 bg-[#EEEEEE]' id="services">
      <div className='flex flex-col gap-3 items-center justify-center text-center'>
        <h4 className='text-md sm:text-2xl font-serif text-gray-600'>What I Will Do For You</h4>
        <h1 className='text-3xl sm:text-4xl font-bold text-primary'>SERVICE</h1>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className='flex flex-wrap items-center justify-center gap-8 px-4'
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </motion.div>
    </div>
  )
}

export default MyServiceLayout
