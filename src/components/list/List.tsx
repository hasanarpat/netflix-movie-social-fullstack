'use client';
import './list.scss';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
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
