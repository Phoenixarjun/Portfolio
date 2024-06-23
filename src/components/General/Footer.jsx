import React from 'react';
import { format } from 'date-fns';

const Footer = () => {
  const date = new Date();
  const formattedDate = format(date, 'MMM yyyy');

  return (
    <div className='h-48 bg-primary flex items-center justify-center text-quaternary mt-10'>
      <h1>Last Updated {formattedDate} by Naresh B A</h1>
    </div>
  )
}

export default Footer;
