import React from 'react'

const ServiceCard = ({ service }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 w-80 text-center p-5 rounded-2xl hover:bg-tertiary-500'>
      <img src={service.img} alt="WebDev" width={80} className='rounded-full'/>
      <h3 className='text-2xl font-semibold'>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  )
}

export default ServiceCard