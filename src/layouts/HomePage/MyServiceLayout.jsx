import React from 'react'
import ServiceCard from '../../components/HomePage/ServiceCard'

const MyServiceLayout = () => {
  const services = [
    {
      name: 'Web Development',
      description: 'I will create a beautiful, responsive, and user-friendly website for you.',
      img: './logo/WebDevelopment.jpg'
    },
    {
      name: 'Web Design',
      description: 'I will design a beautiful, responsive, and user-friendly website for you.',
      img: './logo/WebDevelopment.jpg'
    },
    {
      name: 'Mobile Development',
      description: 'I will create a beautiful, responsive, and user-friendly mobile app for you.',
      img: './logo/WebDevelopment.jpg'
    },
    {
      name: 'Data Analysis',
      description: 'I will analyze your data and provide you with insights and recommendations.',
      img: './logo/WebDevelopment.jpg'
    },
    {
      name: 'Artificial Intelligence',
      description: 'I will create a beautiful, responsive, and user-friendly AI model for you.',
      img: './logo/WebDevelopment.jpg'
    }
  ]
  return (
    <div className='flex flex-col gap-8 items-center justify-center mt-10'>
      <div className='flex flex-col gap-3 items-center justify-center'>
        <h4 className='text-lg font-serif'>What I Will Do For You</h4>
        <h1 className='text-5xl font-bold'>SERVICE</h1>
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