import Link from 'next/link';
import './page.scss';
import Image from 'next/image';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import Category from '@/components/category/Category';

const GenreResults = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/genre/${id}`, {
    cache: 'no-store',
  });
  const items = await res.json();

  return (
    <div className="genre">
      <div className="filter">
        <Category type="movies" />
        <h1>
          Movies and Series in <strong>{id}</strong>
        </h1>
      </div>
      <div className="wrapper">
        {items.length > 0 ? (
          items.map((item: any) => (
            <Link
              href={
                item.seasons ? `/series/${item._id}` : `/movies/${item._id}`
              }
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
              <div className="desc">
                <h2 className="title">{item.title}</h2>
                <p className="info">
                  <span>{item.released}</span>
                  <span>{item.genre}</span>
                  <span>{item.runtime} mn.</span>
                </p>
                <p className="plot">{item.plot.slice(0, 128)}</p>
                <p className="imdbRating">IMDB: {item.imdbRating}</p>

                <div className="icons">
                  <IoMdAddCircleOutline className="icon" />
                  <AiOutlineLike className="icon" />
                  <BiDislike className="icon" />
                </div>
              </div>
              <div className="filter" />
            </Link>
          ))
        ) : (
          <h1 style={{ marginTop: 240 }}>No data</h1>
        )}
      </div>
    </div>
  );
};

export default GenreResults;
