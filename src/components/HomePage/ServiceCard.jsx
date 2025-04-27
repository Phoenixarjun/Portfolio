import React from 'react'

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-80 text-center p-3 rounded-2xl hover:bg-tertiary-500 sm:p-5 transition duration-300">
      <div className="bg-white rounded-full p-2 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
        <img 
          src={service.img} 
          alt={service.name} 
          className="object-contain"
        />
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold">{service.name}</h3>
      <p className="text-sm sm:text-base font-medium">{service.description}</p>
    </div>
  )
}

export default ServiceCard
