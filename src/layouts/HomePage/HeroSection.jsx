import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import ParticlesBg from '../../components/General/ParticlesBg';

const HeroSection = () => {
  const label = [
    {
      icons: <FaLinkedinIn className='text-md sm:text-xl' />,
      link: 'https://www.linkedin.com/in/naresh-b-a-7b1b3b1b1/'
    },
    {
      icons: <FaGithub className='text-md sm:text-xl' />,
      link: 'https://github.com/Phoenixarjun'
    },
    {
      icons: <FaXTwitter className='text-md sm:text-xl' />,
      link: 'https://x.com/Naresh14272101'
    },
    {
      icons: <IoDocumentTextOutline className='text-md sm:text-xl' />,
      link: 'https://drive.google.com/file/d/1Rvmc7fboNMR1CklFDANsSkI5UnvlpzJZ/view?usp=drive_link'
    }
  ];

  return (
    <div className='relative h-[150vh] md:h-[99vh]'>
      <ParticlesBg />
      <div className='relative flex flex-col items-center justify-around gap-0 h-full p-8 text-quaternary z-10 md:flex-row sm:gap-4'>
        <div className='flex flex-col items-center gap-2 justify-center md:items-start'>
          <h2 className='text-xl sm:text-4xl'>Hello, I'm</h2>
          <h1 className="outlined-text text-5xl font-bold font-sans sm:text-6xl">NARESH B A</h1>
          <span className='text-tertiary text-xl sm:text-2xl'>
            <Typewriter
              words={['Web Developer', 'React Developer', 'Data Analyst']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <div className='flex items-center gap-8'>
            {label.map((item, index) => (
              <SocalMedia key={index} icon={item.icons} link={item.link} />
            ))}
          </div>
        </div>
        <div className='pt-8 shadow-xl w-52 rounded-3xl hover:rotate-12 transition-all ease-in-out delay-100 sm:w-64'>
          <img src="/images/Profile2.png" alt="profile" className='rounded-3xl' />
        </div>
      </div>
    </div>
  );
};

const SocalMedia = ({ icon, link }) => {
  return (
    <div className='flex justify-around gap-4 bg-primary p-4 text-quaternary shadow-xl rounded-full mt-3'>
      <a href={`${link}`} target='_blank'>
        {icon}
      </a>
    </div>
  );
};

export default HeroSection;
