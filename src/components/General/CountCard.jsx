import React from 'react'

const CountCard = ({ label, count }) => {
  return (
    <div className='flex flex-col gap-3 text-center justify-around mt-10 font-serif'>
      <h2 className='text-xl'>{label}</h2>
      <p className='text-xl'>{`${count-1}+`}</p>
    </div>
  )
}

export default CountCard