import React from 'react'
import ServiceCard from '../../components/HomePage/ServiceCard'

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
    <div className='flex flex-col gap-8 items-center justify-center py-20 bg-white'>
      <div className='flex flex-col gap-3 items-center justify-center'>
        <h4 className='text-md sm:text-lg font-serif'>What I Will Do For You</h4>
        <h1 className='text-3xl sm:text-5xl font-bold'>SERVICE</h1>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-5'>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  )
}

export default MyServiceLayout