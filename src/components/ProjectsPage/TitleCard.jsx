import React from 'react';

const TitleCard = ({ title, description, image, link }) => {
  return (
    <div className="relative flex flex-col justify-center items-start gap-3 p-8 text-white">
      <img
        src={image}
        alt="Card Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <div className="relative z-10 bg-black/40 p-5 rounded-lg backdrop-blur-sm gap-5 flex flex-col items-start max-w-2xl">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-gray-300">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-2 border border-white text-white rounded-2xl hover:bg-white hover:text-black transition duration-300 cursor-pointer"
        >
          Dive into the Project
        </a>
      </div>
    </div>
  );
};

export default TitleCard;
