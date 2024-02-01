'use client';
import './list.scss';
import ListItem from '../listItem/ListItem';
import { Suspense, useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Movie {
  _id: string;
  title: string;
  year: string;
  actors: string[];
  awards: string;
  comments: any[];
  country: string;
  createdAt: string;
  director: string[];
  genre: string;
  imdbId: string;
  imdbRating: string;
  imdbVotes: string;
  language: string;
  metaScore: string;
  plot: string;
  poster: string;
  rated: string;
  ratings: Rating[];
  released: string;
  runtime: string;
  updatedAt: string;
  writer: string[];
}

interface Rating {
  source: string;
  value: string;
}

const List = () => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [disableDirection, setDisableDirection] = useState(false);

  const handleClick = (direction: string) => {
    if (!disableDirection) {
      setDisableDirection(true);
      if (listRef.current != null) {
        let distance = listRef.current?.getBoundingClientRect().x - 50;

        if (direction === 'left' && slideNumber > 0) {
          setSlideNumber((prev) => prev - 1);
          listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === 'right' && slideNumber <= 5) {
          setSlideNumber((prev) => prev + 1);
          listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
      }
      // if user click more than once in animation duration, disable clicking
      setTimeout(() => {
        setDisableDirection(false);
      }, 1000);
    }
  };
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/movies');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e);
    });
  }, []);

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <IoIosArrowBack
          className="arrow"
          onClick={() => handleClick('left')}
        />
        <div
          className="container"
          ref={listRef}
        >
          <Suspense fallback={<div style={{ color: 'white' }}>Loading...</div>}>
            {data?.map((item: any) => (
              <ListItem
                movie={item}
                key={item._id}
              />
            ))}
          </Suspense>
        </div>
        <IoIosArrowForward
          className="arrow"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default List;
