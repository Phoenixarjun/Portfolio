import React from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="flex items-center bg-neutral-100 rounded-lg py-2 px-4 gap-x-4 border">
      <IoSearch />
      <input
        type='text'
        placeholder={"Search Certifications"}
        className="bg-transparent w-[45vw] focus:outline-none"
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchBar;
