import React from 'react'
import { FaRegCircleDot } from "react-icons/fa6";

const TimeLineCard = ({ heading, subHeading, year, description, position }) => {
  const borderRadius = position === 'first' ? 'rounded-t-lg' : position === 'last' ? 'rounded-b-lg' : ''
  return (
    <div className='relative flex gap-10'>
      <div className={`flex w-1 bg-white ${borderRadius}`}></div>
      <div className='flex flex-col gap-6 pt-5'>
        <h1 className='text-md sm:text-xl font-bold text-tertiary'>{heading}</h1>
        <div className='flex flex-col items-left gap-0 sm:flex-row sm:gap-2'>
          <span className='font-semibold text-sm sm:text-md'>{subHeading}</span>
          <span className='w-[2px] rotate-90 translate-x-2 h-4 bg-white sm:rotate-180 sm:translate-x-0'></span>
          <span className='text-sm sm:text-md'>{year}</span>
        </div>
        <p className='text-sm sm:text-md'>{description}</p>
      </div>
      <FaRegCircleDot className='absolute top-4 -translate-x-2 text-xl'/>
    </div>
  )
}

export default TimeLineCard