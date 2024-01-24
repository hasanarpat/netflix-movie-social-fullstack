import Image from 'next/image';
import './listItem.scss';
import V from '../../../public/v.png';
import { IoPlayOutline } from 'react-icons/io5';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import Link from 'next/link';

const ListItem = () => {
  return (
    <div className="listItem">
      <div className="imgContainer">
        <Image
          alt=""
          src={V}
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
        <div className="name">V for Vendetta</div>
        <div className="desc">
          Aute nisi fugiat sint pariatur officia aliquip reprehenderit officia
          proident sint. Labore in cillum consequat do irure ullamco irure
          aliqua sunt eiusmod excepteur et do amet.
        </div>
        <div className="genre">Action</div>
        <div className="info">
          <span>1h14mn</span>
          <span className="limit">16+</span>
          <span>1999</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
