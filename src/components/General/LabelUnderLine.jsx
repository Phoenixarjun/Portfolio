import React from 'react'

const LabelUnderLine = ({ name, status }) => {
  return (
    <div className='flex flex-col gap-1 items-center md:items-start'>
      <h1 className='text-2xl sm:text-3xl font-bold'>{name}</h1>
      <div className='flex items-center gap-1'>
        <div className={`w-3 h-3 rounded-full  border-[3px]  ${status ? 'border-white bg-primary' : 'bg-white border-black'}`}></div>
        <div className={`w-12 h-1 rounded-xl ${status ? 'bg-white' : 'bg-black'}`}></div>
        <div></div>
      </div>
    </div>
  )
}

export default LabelUnderLine