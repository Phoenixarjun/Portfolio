import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const SearchBar = ({ onSearchChange, name }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearchChange(e); 
  };

  const handleClear = () => {
    setInput('');
    onSearchChange({ target: { value: '' } }); 
  };

  return (
    <div className="flex items-center bg-neutral-100 rounded-lg py-2 px-4 gap-x-4 border w-full max-w-[600px]">
      <IoSearch className="text-gray-500" />
      <input
        type='text'
        placeholder={`Search ${name}`}
        className="bg-transparent w-full focus:outline-none"
        value={input}
        onChange={handleChange}
      />
      {input && (
        <button onClick={handleClear} className="text-gray-500 hover:text-red-500">
          <IoClose size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
