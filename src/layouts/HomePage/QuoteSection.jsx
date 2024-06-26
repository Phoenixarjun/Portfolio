import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const QuoteSection = () => {
  return (
    <div className='flex flex-col items-center justify-center  bg-[url("/images/QuoteWallpaper.jpg")] font-serif bg-cover bg-center h-64 p-10'>
        <ImQuotesLeft className='text-5xl self-start'/>
        <h1 className='text-primary text-center mb-4 text-lg md:text-xl lg:text-2xl px-5 md:px-20 lg:px-40'>
            A Bug is never just a mistake. It represents something bigger. An error of thinking that makes you who you are.
        </h1>
        <span>-Elliot Alderson</span>
        <ImQuotesRight className='text-5xl self-end'/>
    </div>
  )
}

export default QuoteSection;
