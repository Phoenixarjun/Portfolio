import React from 'react'

const ServiceCard = ({ service }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 w-80 text-center p-3 rounded-2xl hover:bg-tertiary-500 sm:p-5'>
      <img src={service.img} alt="WebDev" className='rounded-full w-16 sm:w-20'/>
      <h3 className='text-xl sm:text-2xl font-semibold'>{service.name}</h3>
      <p className=' text-sm sm:text-base font-medium'>{service.description}</p>
    </div>
  )
}

export default ServiceCard