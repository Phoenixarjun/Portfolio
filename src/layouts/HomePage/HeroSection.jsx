import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";


const HeroSection = () => {
  const label = [
    {
      icons: <FaLinkedinIn className='text-xl'/>,
      link: 'https://www.linkedin.com/in/naresh-b-a-7b1b3b1b1/'
    },
    {
      icons: <FaGithub className='text-xl'/>,
      link: 'https://github.com/Phoenixarjun'
    },
    {
      icons: <FaXTwitter className='text-xl'/>,
      link: 'https://x.com/Naresh14272101'
    },
    {
      icons: <IoDocumentTextOutline className='text-xl'/>,
      link: 'https://drive.google.com/file/d/1Rvmc7fboNMR1CklFDANsSkI5UnvlpzJZ/view?usp=drive_link'
    }
  ]
  return (
    <div className='flex justify-around gap-4 h-[70vh] bg-primary p-8 text-quaternary'>
      <div className='flex flex-col gap-2 justify-center'>
        <h2 className='text-4xl'>Hello, I'm</h2>
        <h1 className='text-6xl font-bold font-name'>NARESH B A</h1>
        <span className='text-tertiary text-2xl'>
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
      <div className='pt-8 shadow-xl w-64 rounded-3xl h-64 hover:rotate-12 transition-all ease-in-out delay-100'>
        <img src="/images/Profile2.png" alt="profile" className='rounded-3xl'/>
      </div>
    </div>
  )
}


const SocalMedia = ({ icon, link }) => {
  return(
    <div className='flex justify-around gap-4 bg-primary p-4 text-quaternary shadow-xl rounded-full mt-3'>
      <a href={`${link}`} target='_blank'>
        {icon}
      </a>
    </div>  
  )
}
export default HeroSection