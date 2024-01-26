import Image from 'next/image';
import './library.scss';
import Link from 'next/link';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { getAllData } from '@/utils/db/getData';

const Library = async ({ route }: { route: String }) => {
  const items = await getAllData(route);
  return (
    <div className="library">
      <div className="wrapper">
        {items.map((item: any) => (
          <Link
            href={`/${route}/${item._id}`}
            className="item"
            key={item._id}
          >
            <div className="imgContainer">
              <Image
                alt={item.title}
                src={item.poster.replace(/'/g, '')}
                fill
                className="img"
              />
              <div className="filter" />
            </div>
            <h2 className="singleTitle">{item.title}</h2>
            <div className="desc">
              <h2 className="title">{item.title}</h2>
              <p className="info">
                <span>{item.released}</span>
                <span>{item.genre}</span>
                <span>{item.runtime} mn.</span>
              </p>
              <p className="plot">{item.plot.slice(0, 96)}</p>
              <p className="imdbRating">IMDB: {item.imdbRating}</p>
              {route === 'series' && (
                <p className="seasons">Seasons: {item.totalSeasons}</p>
              )}
              <div className="icons">
                <IoMdAddCircleOutline className="icon" />
                <AiOutlineLike className="icon" />
                <BiDislike className="icon" />
              </div>
            </div>
            <div className="filter" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Library;
