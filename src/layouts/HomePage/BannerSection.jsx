import React from 'react'
import { motion } from 'framer-motion'

const BannerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 text-white bg-[url(/images/Banner1.svg)] bg-cover bg-center h-[93vh] px-4">

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="font-banner2 tracking-wider text-sm sm:text-3xl max-w-3xl"
      >
        I’m not just here to build websites <strong className='text-blue-200'>I’m here to build trust</strong>. Let’s turn your ideas into stunning digital experiences that connect and inspire.
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        className="text-2xl sm:text-5xl font-bold tracking-wider uppercase"
      >
        LET'S BUILD SOMETHING AMAZING TOGETHER
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        className="mt-4"
      >
      </motion.div>
    </div>
  )
}

export default BannerSection
