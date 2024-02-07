'use client';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import './search.scss';
import Image from 'next/image';
import Link from 'next/link';

// function debounce<T extends (...args: any[]) => void>(
//   func: T,
//   delay: number
// ): (...args: Parameters<T>) => void {
//   let timeoutId: ReturnType<typeof setTimeout> | null;

//   return function (...args: Parameters<T>) {

//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }

//     timeoutId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// const handleInputChangeDebounced = debounce((value: string) => {
//   return value;
// }, 500);

const getResults = async (value: string) => {
  const res = await fetch('http://localhost:3000/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });

  if (res.ok) {
    const results = await res.json();
    return results;
  }
};

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    // const debouncedValue = handleInputChangeDebounced(value);

    if (inputValue !== '') {
      const results = await getResults(inputValue);

      setResults(results);
    }
  };
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
            () => setShowInput(false);
            () => setResults([]);
          }}
          value={value}
        />
      </div>
      <div style={{ position: 'relative' }}>
        {results.length > 0 && (
          <div className={showInput ? 'results show-results' : 'results'}>
            <div className="wrapper">
              {results.map((result: any) => (
                <div
                  className="item"
                  key={result._id}
                >
                  <Link
                    href={
                      result.seasons
                        ? `/series/${result._id}`
                        : `/movies/${result._id}`
                    }
                    className="info"
                    onClick={() => setShowInput(false)}
                  >
                    <Image
                      width={50}
                      height={50}
                      className="img"
                      alt="img"
                      src={result.poster.replace(/'/g, '')}
                    />
                    <h5>{result.title}</h5>
                  </Link>
                  <div className="img-bg-container">
                    <Image
                      fill
                      className="img-bg"
                      alt="img"
                      src={result.img}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
