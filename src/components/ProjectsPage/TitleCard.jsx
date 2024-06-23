import React from 'react';

const TitleCard = ({ title, description }) => {
  return (
    <div className="relative bg-[url('/images/AmazonPrimeCover.svg')] h-[50vh] flex flex-col justify-center items-start gap-3 p-5 bg-center bg-cover bg-no-repeat text-white">
      <h1 className='text-4xl primary font-bold'>{title}</h1>
      <p className='w-1/2'>{description}</p>
      <button className='p-2 px-4 bg-transparent rounded-2xl text-white'>Dive into the Project</button>
    </div>
  )
}

export default TitleCard;
