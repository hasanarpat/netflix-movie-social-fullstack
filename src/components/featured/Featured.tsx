import Image from 'next/image';
import './featured.scss';
import { IoInformationCircle, IoPlay } from 'react-icons/io5';
import matrix from '../../../public/info-title.png';
import { FC } from 'react';
import { getData } from '@/utils/db/getData';
import Link from 'next/link';

interface props {
  type?: string;
}

const Featured: FC<props> = async ({ type }) => {
  const featured = await getData('featured');

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
        {featured.popupTitle ? (
          <div className="imgContainer">
            <Image
              alt="Netflix Logo"
              src={featured.popupTitle}
              className="img"
              fill
            />
          </div>
        ) : (
          <h2>{featured.title}</h2>
        )}
        <span className="desc">{featured.plot.slice(0, 320) + '...'}</span>
        <div className="buttons">
          <button className="play">
            <Link href={`/movies/${featured._id}/play`}>
              <IoPlay />
              <span>Play</span>
            </Link>
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
