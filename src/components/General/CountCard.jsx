import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CountCard = ({ label, count }) => {
  return (
    <motion.div
      className='flex flex-col gap-3 text-center justify-around mt-10 font-serif'
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className='text-xl'>{label}</h2>
      <p className='text-xl'>{`${count - 1}+`}</p>
    </motion.div>
  );
};

export default CountCard;
