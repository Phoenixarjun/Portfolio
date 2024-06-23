import React from 'react';

const SelectBox = ({ options, onChange }) => {
  return (
    <select className="border border-1 border-primary shadow-md rounded-xl px-2 py-1" onChange={onChange}>
      {options.map((type) => (
        <option value={type} key={type} className='hover:bg-tertiary'>{type}</option>
      ))}
    </select>
  )
}

export default SelectBox;
