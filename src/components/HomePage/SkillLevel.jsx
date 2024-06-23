import React, { useEffect, useState } from 'react'

const SkillLevel = ({ name, color, level }) => {
  const [width, setWidth] = useState('0%')

  useEffect(() => {
    const levelPercentage = level
    setTimeout(() => {
      setWidth(`${levelPercentage}%`)
    }, 1000) 
  }, [level])

  return (
    <div className='flex flex-col gap-2 w-2/5'>
      <h4 className='font-bold'>{name}</h4>
      <div className='relative w-full h-4 bg-gray-200 rounded-3xl shadow'>
        <div
          className='absolute h-full rounded-3xl transition-all duration-700 ease-linear'
          style={{
            width: width,
            backgroundColor: color
          }}
        ></div>
      </div>
    </div>
  )
}

export default SkillLevel
