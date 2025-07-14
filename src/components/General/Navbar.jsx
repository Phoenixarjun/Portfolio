import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ toggleOpen, handleToggle, isToggle }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  const labels = [
    {
      name: 'Home',
      link: '#home',
      pageLink: '/'
    },
    {
      name: 'About',
      link: '#about',
      pageLink: '/'
    },
    {
      name: 'Certifications',
      link: '#certifications',
      pageLink: '/certifications'
    },
    {
      name: 'Services',
      link: '#services',
      pageLink: '/'
    },
    {
      name: 'Projects',
      link: '#portfolio',
      pageLink: '/projects'
    },
  ]

  return (
    <nav className="sticky top-0 w-full flex flex-col md:flex-row justify-start md:justify-center items-center gap-5 p-3 text-quaternary bg-black/80 z-50 backdrop-blur-md">
      <div className='rounded-full w-full md:w-auto'>
        <img src="/images/Profile.jpg" alt="Profile" width={40} className='rounded-full border border-tertiary' />
      </div>
      <ul className={`flex-col items-start md:flex-row md:justify-center gap-5 w-full md:w-auto ${open ? 'flex' : 'hidden'} md:flex transition duration-300 ease-in-out`}>
        {labels.map((label, index) => (
          <NavList key={index} name={label.name} link={label.link} pageLink={label.pageLink} />
        ))}
      <li className='p-2 text-white hover:bg-tertiary w-full rounded-lg md:hover:text-tertiary md:hover:bg-primary transition duration-300 ease-in-out'>
        <a href="https://medium.com/@phoenixarjun007" target='blank'>Blogs</a>
      </li>
      </ul>
      {/* {isToggle && <ToggleButton toggleOpen={toggleOpen} handleToggle={handleToggle} />} */}
      <div className='absolute top-3 right-3 md:hidden' onClick={handleOpen}>
        <svg className={`ham hamRotate ham7 w-8 cursor-pointer ${open ? 'active' : ''}`} viewBox="0 0 100 100">
          <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" />
          <path
            className="line middle"
            d="m 70,50 h -40" />
          <path
            className="line bottom"
            d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" />
        </svg>
      </div>
    </nav>
  );
}


const NavList = ({ name, link, pageLink }) => {
  const location = useLocation();
  const isSamePage = location.pathname === pageLink;

  return (
    <li className='p-2 text-white hover:bg-tertiary w-full rounded-lg md:hover:text-tertiary md:hover:bg-primary transition duration-300 ease-in-out'>
      {isSamePage ? (
        <a href={link}>{name}</a>
      ) : (
        <Link to={pageLink}>{name}</Link>
      )}
    </li>
  );
};


const ToggleButton = ({ toggleOpen, handleToggle }) => {
  return (
    <label
      className="hidden cursor-pointer relative h-[1.5em] w-[3em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)] md:block"
    >
      <span
        className="absolute inset-[0.05em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"
      ></span>
      <div
        className="absolute left-[0.25em] top-1/2 flex h-[1.1em] w-[1.1em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]"
      >
        <div
          className="h-[0.75em] w-[0.75em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]"
        ></div>
      </div>
      <div
        className="absolute right-[0.25em] top-1/2 h-[0.125em] w-[0.75em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]"
      ></div>
      <input 
        className="peer h-[0.5em] w-[0.5em] opacity-0" 
        type="checkbox" 
        checked={toggleOpen}
        onChange={handleToggle}
      />
      <span
        className={`absolute top-1/2 flex h-[1.25em] w-[1.25em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_2px_2px_2px_0px_rgba(64,64,64,0.25),inset_-2px_-2px_2px_0px_rgba(16,16,16,0.5)] transition-all duration-300 ${toggleOpen ? 'left-[calc(100%-1.375em)]' : 'left-[0.125em]'}`}
      >
        <span className="relative h-full w-full rounded-full">
          <span
            className="absolute inset-[0.05em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"
          ></span>
        </span>
      </span>
    </label>
  )
}

export default Navbar;