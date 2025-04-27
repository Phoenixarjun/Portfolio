import React from 'react'

const TechnologyBox = ({ techIcon, techName }) => {
  return (
    <div className='border-2 w-20 h-20 border-gray-600 shadow-md p-2 flex items-center justify-center bg-white rounded-2xl'>
      <img src={techIcon} alt={techName} width={50} />
    </div>
  )
}

export default TechnologyBox
