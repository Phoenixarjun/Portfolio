import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

const ObjectivesBox = ({ objectives }) => {
  return (
    <div className='flex flex-col w-96 gap-3 bg-white border border-1 border-black'>
      <div  className='text-center px-5 py-3 bg-tertiary flex gap-2 items-center justify-center text-white'>
      <FontAwesomeIcon icon={faBullseye} />
        <h1 className='text-primary text-lg underline font-bold'>OBJECTIVES</h1>
      </div>
      <div className='flex flex-col gap-2 p-8'>
        {objectives.map((obj, index) => (
          <div key={index} className='flex gap-2 items-center'>
          <img src="/icons/checked.png" alt="checked" width={20} height={20}/>
            <p>{obj.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ObjectivesBox;
