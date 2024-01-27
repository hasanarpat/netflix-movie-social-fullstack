import Image from 'next/image';
import './listItem.scss';
import V from '../../../public/v.png';
import { IoPlayOutline } from 'react-icons/io5';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import Link from 'next/link';

const ListItem = ({ movie }: { movie: any }) => {
  return (
    <div className="listItem">
      <div className="imgContainer">
        <Image
          alt=""
          src={movie.poster.replace(/'/g, '')}
          fill
          className="img"
        />
      </div>
      <video
        autoPlay={true}
        src="/VforV.mp4"
        loop
        className="trailer"
        muted
      />
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
