import Image from 'next/image';
import './featured.scss';
import { IoInformationCircle, IoPlay } from 'react-icons/io5';
import matrix from '../../../public/info-title.png';
import { FC } from 'react';

interface props {
  type?: string;
}

const Featured: FC<props> = ({ type }): JSX.Element => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select
            name="genre"
            id="genre"
          >
            <option value="genre">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <Image
        alt="Netflix Logo"
        src="https://images.unsplash.com/photo-1705378777900-a6a088b11682?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="img"
        fill
      />
      <div className="info">
        <div className="imgContainer">
          <Image
            alt="Netflix Logo"
            src={matrix}
            className="poster"
            fill
          />
        </div>
        <span className="desc">
          Anim fugiat pariatur ex ullamco aliquip. Ullamco ex laboris occaecat
          officia. Duis in in nostrud velit magna ad anim cupidatat minim.
          Cupidatat nisi eu nisi magna et aute consequat cupidatat qui occaecat
          laboris minim veniam. Ea dolore ad in officia sint anim id.
        </span>
        <div className="buttons">
          <button className="play">
            <IoPlay />
            <span>Play</span>
          </button>
          <button className="more">
            <IoInformationCircle />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
