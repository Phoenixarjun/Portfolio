import React from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl rounded-3xl w-80 p-6 text-center flex flex-col items-center justify-center gap-4 transition duration-300"
    >
      <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-md">
        <img
          src={service.img}
          alt={service.name}
          className="w-10 h-10 object-contain"
        />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-primary">{service.name}</h3>
      <p className="text-sm sm:text-base text-gray-700">{service.description}</p>
    </motion.div>
  )
}

export default ServiceCard
