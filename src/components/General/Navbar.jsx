import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
      link: '#portfolio',
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
    }
  ]

  return (
    <nav className="relative flex flex-col md:flex-row justify-start md:justify-center items-center gap-5 p-3 text-quaternary bg-primary">
      <div className='rounded-full w-full md:w-auto'>
        <img src="/images/Profile.jpg" alt="Profile" width={40} className='rounded-full border border-tertiary' />
      </div>
      <ul className={`flex-col items-start md:flex-row md:justify-center gap-5 w-full md:w-auto ${open ? 'flex' : 'hidden'} md:flex transition duration-300 ease-in-out`}>
        {labels.map((label, index) => (
          <NavList key={index} name={label.name} link={label.link} pageLink={label.pageLink} />
        ))}
      </ul>

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
  return(
    <Link to={`${pageLink}`}>
      <li className='p-2 text-white hover:bg-tertiary w-full rounded-lg md:hover:text-tertiary md:hover:bg-primary transition duration-300 ease-in-out'>
        <a href={`${link}`}>{name}</a>
      </li>
    </Link>
  )
}

export default Navbar;
