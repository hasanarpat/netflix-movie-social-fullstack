import Image from 'next/image';
import './featured.scss';
import { IoInformationCircle, IoPlay } from 'react-icons/io5';
import matrix from '../../../public/info-title.png';
import { FC } from 'react';
import { getAllData } from '@/utils/db/getData';

interface props {
  type?: string;
}

const Featured: FC<props> = async ({ type }) => {
  const featured = await getAllData('featured');

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
        src={featured.poster.replace(/'/g, '')}
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
        <span className="desc">{featured.plot.slice(0, 255) + '...'}</span>
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
