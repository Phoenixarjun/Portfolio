// FilterLayout.js

import React, { useState } from 'react';
import SearchBar from '../components/General/SearchBar';
import SelectBox from '../components/General/SelectBox';

const FilterLayout = ({ onFilterChange, domains, technologies, collaborations, types, platforms, languages }) => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    if (types) {
      onFilterChange({ type: e.target.value, platform: selectedPlatform, language: selectedLanguage, search: searchTerm });
    } else {
      onFilterChange({ domain: selectedType, technology: selectedPlatform, collaboration: selectedLanguage, search: searchTerm });
    }
  };

  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
    if (types) {
      onFilterChange({ type: selectedType, platform: e.target.value, language: selectedLanguage, search: searchTerm });
    } else {
      onFilterChange({ domain: selectedType, technology: e.target.value, collaboration: selectedLanguage, search: searchTerm });
    }
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    if (types) {
      onFilterChange({ type: selectedType, platform: selectedPlatform, language: e.target.value, search: searchTerm });
    } else {
      onFilterChange({ domain: selectedType, technology: selectedPlatform, collaboration: e.target.value, search: searchTerm });
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (types) {
      onFilterChange({ type: selectedType, platform: selectedPlatform, language: selectedLanguage, search: e.target.value });
    } else {
      onFilterChange({ domain: selectedType, technology: selectedPlatform, collaboration: selectedLanguage, search: e.target.value });
    }
  };

  return (
    <div className='mt-10 flex items-end justify-center gap-4'>
      <SearchBar onSearchChange={handleSearchChange} />
      {types ? (
        <>
          <SelectContainer title='Types' options={types} onChange={handleTypeChange} />
          <SelectContainer title='Platforms' options={platforms} onChange={handlePlatformChange} />
          <SelectContainer title='Languages' options={languages} onChange={handleLanguageChange} />
        </>
      ) : (
        <>
          <SelectContainer title='Domains' options={domains} onChange={handleTypeChange} />
          <SelectContainer title='Technologies' options={technologies} onChange={handlePlatformChange} />
          <SelectContainer title='Collaboration' options={collaborations} onChange={handleLanguageChange} />
        </>
      )}
    </div>
  );
};

const SelectContainer = ({ title, options, onChange }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <h3 className='font-semibold'>{title}</h3>
      <SelectBox options={options} onChange={onChange} />
    </div>
  );
};

export default FilterLayout;
