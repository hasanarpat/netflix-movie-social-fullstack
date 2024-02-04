import Image from 'next/image';
import './featured.scss';
import { IoInformationCircle, IoPlay } from 'react-icons/io5';
import matrix from '../../../public/info-title.png';
import { FC } from 'react';
import { getData } from '@/utils/db/getData';
import Link from 'next/link';
import Category from '../category/Category';

interface props {
  type?: string;
}

const Featured: FC<props> = async ({ type }) => {
  const featured = await getData('featured');

  return (
    <div className="featured">
      {type && <Category type="movie" />}
      <Image
        alt="Netflix Logo"
        src={featured.img}
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
