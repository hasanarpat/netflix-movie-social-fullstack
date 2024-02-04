'use client';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import './search.scss';

const Search = () => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  };

  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="search">
      <BiSearch
        className="icon search-icon"
        onClick={() => setShowInput((prev) => !prev)}
      />
      <div className={showInput ? 'input show-input' : 'input'}>
        <input
          type="text"
          onChange={handleSearch}
          onBlur={() => {
            () => setValue('');
            setShowInput(false);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
