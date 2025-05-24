import React from 'react'

const Screenshots = ({ screenshots }) => {
  return (
    <div className='flex flex-col gap-5 p-3'>
      <h1 className='text-3xl font-bold text-center underline'>Screenshots</h1>
      <div className='flex flex-wrap gap-5 justify-center'>
        {screenshots.map((screenshot, index) => (
          <div key={index} className='flex flex-col items-center gap-5'>
            <img
              src={screenshot.img}
              alt={screenshot.title}
              className='w-full  h-64 object-cover rounded-lg shadow-lg'
            />
            <p className='text-lg font-medium text-center'>{screenshot.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Screenshots
