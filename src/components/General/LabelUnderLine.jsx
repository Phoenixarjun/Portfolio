import React from 'react'

const LabelUnderLine = ({ name }) => {
  return (
    <div className='flex flex-col gap-1'>
      <h1 className='text-3xl font-bold'>{name}</h1>
      <div className='flex items-center gap-1'>
        <div className='w-3 h-3 rounded-full bg-white border-[3px] border-black'></div>
        <div className='w-12 h-1 rounded-xl bg-black'></div>
        <div></div>
      </div>
    </div>
  )
}

export default LabelUnderLine