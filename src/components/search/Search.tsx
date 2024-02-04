'use client';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import './search.scss';
import Image from 'next/image';
import Link from 'next/link';

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return function (...args: Parameters<T>) {
    // Eğer bir önceki timeout varsa iptal et
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Yeni bir timeout oluştur
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const handleInputChangeDebounced = debounce((value: string) => {
  return value;
}, 500);

const getResults = async (value: string) => {
  const res = await fetch('http:localhost:3000/api/search', {
    body: JSON.stringify(value),
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
    const debouncedValue = handleInputChangeDebounced(value);

    setResults(await getResults(value));
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
            setShowInput(false);
          }}
          value={value}
        />
      </div>
      <div style={{ position: 'relative' }}>
        <div className={showInput ? 'results show-results' : 'results'}>
          <div className="wrapper">
            <div className="item">
              <Link
                href="/"
                className="info"
              >
                <Image
                  width={50}
                  height={50}
                  className="img"
                  alt="img"
                  src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
                />
                <h5>Batman Begins</h5>
              </Link>
              <div className="img-bg-container">
                <Image
                  fill
                  className="img-bg"
                  alt="img"
                  src="https://m.media-amazon.com/images/M/MV5BMjQ4NDg5MTQwNl5BMl5BanBnXkFtZTgwNTQwMTk2MTI@._V1_.jpg"
                />
              </div>
            </div>{' '}
            <div className="item">
              <Link
                href="/"
                className="info"
              >
                <Image
                  width={50}
                  height={50}
                  className="img"
                  alt="img"
                  src="https://m.media-amazon.com/images/M/MV5BMjQ4NDg5MTQwNl5BMl5BanBnXkFtZTgwNTQwMTk2MTI@._V1_.jpg"
                />
                <h5>Batman Begins</h5>
              </Link>
              <div className="img-bg-container">
                <Image
                  fill
                  className="img-bg"
                  alt="img"
                  src="https://m.media-amazon.com/images/M/MV5BMjQ4NDg5MTQwNl5BMl5BanBnXkFtZTgwNTQwMTk2MTI@._V1_.jpg"
                />
              </div>
            </div>{' '}
            <div className="item">
              <Link
                href="/"
                className="info"
              >
                <Image
                  width={50}
                  height={50}
                  className="img"
                  alt="img"
                  src="https://m.media-amazon.com/images/M/MV5BMjQ4NDg5MTQwNl5BMl5BanBnXkFtZTgwNTQwMTk2MTI@._V1_.jpg"
                />
                <h5>Batman Begins</h5>
              </Link>
              <div className="img-bg-container">
                <Image
                  fill
                  className="img-bg"
                  alt="img"
                  src="https://m.media-amazon.com/images/M/MV5BMjQ4NDg5MTQwNl5BMl5BanBnXkFtZTgwNTQwMTk2MTI@._V1_.jpg"
                />
              </div>
            </div>{' '}
            <div className="item">
              <Link
                href="/"
                className="info"
              >
                <Image
                  width={50}
                  height={50}
                  className="img"
                  alt="img"
                  src="https://m.media-amazon.com/images/M/MV5BMjQ4NDg5MTQwNl5BMl5BanBnXkFtZTgwNTQwMTk2MTI@._V1_.jpg"
                />
                <h5>Batman Begins</h5>
              </Link>
              <div className="img-bg-container">
                <Image
                  fill
                  className="img-bg"
                  alt="img"
                  src="https://m.media-amazon.com/images/M/MV5BMjQ4NDg5MTQwNl5BMl5BanBnXkFtZTgwNTQwMTk2MTI@._V1_.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
