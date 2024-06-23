import React from 'react'
import { FaRegCircleDot } from "react-icons/fa6";

const TimeLineCard = ({ heading, subHeading, year, description, position }) => {
  const borderRadius = position === 'first' ? 'rounded-t-lg' : position === 'last' ? 'rounded-b-lg' : ''
  return (
    <div className='relative flex gap-10'>
      <div className={`flex w-2 bg-black ${borderRadius}`}></div>
      <div className='flex flex-col gap-6 pt-5'>
        <h1 className='text-xl font-bold'>{heading}</h1>
        <div className='flex items-center gap-2'>
          <span className='font-semibold text-md'>{subHeading}</span>
          <span className='w-[2px] h-4 bg-black'></span>
          <span>{year}</span>
        </div>
        <p className='text-md'>{description}</p>
      </div>
      <FaRegCircleDot className='absolute top-4 -translate-x-2 text-xl'/>
    </div>
  )
}

export default TimeLineCard