'use client';
import Image from 'next/image';
import './listItem.scss';
import V from '../../../public/v.png';
import { IoPlayOutline } from 'react-icons/io5';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import Link from 'next/link';
import { CSSProperties, useRef, useState } from 'react';

const ListItem = ({ movie }: { movie: any }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // console.log(
  //   (ref.current?.getClientRects()['0'].x.toFixed() as number) / 325,
  //   ref.current?.getClientRects()['0'].y
  // );

  const xCoordinate = ref.current?.getClientRects()['0'].x as number;
  const fixedXCoordinate = xCoordinate / 325;

  const hoverStyles: CSSProperties = {
    position: 'absolute',
    bottom: -70,
    left: `${fixedXCoordinate * 325 - 70}px`,
    zIndex: 9,
    transition: 'all .2s ease-in-out',
  };

  return (
    <div
      className="listItem"
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={isHovered ? hoverStyles : {}}
    >
      <div className="imgContainer">
        <Image
          alt=""
          src={movie.poster.replace(/'/g, '')}
          fill
          className="img"
        />
      </div>
      <Link href={`/movies/${movie._id}`}>
        <video
          autoPlay={true}
          src="/VforV.mp4"
          loop
          className="trailer"
          muted
        />
      </Link>
      <div className="itemInfo">
        <div className="icons">
          <Link href="/movies/id/play">
            <IoPlayOutline className="icon" />
          </Link>
          <IoMdAddCircleOutline className="icon" />
          <AiOutlineLike className="icon" />
          <BiDislike className="icon" />
        </div>
        <div className="name">{movie.title}</div>
        <div className="desc">{movie.plot.slice(0, 128)}</div>
        <div className="genre">{movie.genre}</div>
        <div className="info">
          <span>{movie.runtime}</span>
          <span className="limit">{movie.rated}</span>
          <span>{movie.released}</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
