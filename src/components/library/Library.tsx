import Image from 'next/image';
import './library.scss';
import Link from 'next/link';

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/series');
  if (!response.ok) return console.log('something went wrong');

  return await response.json();
};

const Library = async () => {
  const series = await getData();
  return (
    <div className="library">
      <div className="wrapper">
        {series.map((item: any) => (
          <Link
            href={`/series/${item._id}`}
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
              <p className="seasons">Seasons: {item.totalSeasons}</p>
            </div>
          </Link>
        ))}{' '}
        {series.map((item: any) => (
          <Link
            href={`/series/${item._id}`}
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
              <p className="seasons">Seasons: {item.totalSeasons}</p>
            </div>
          </Link>
        ))}{' '}
        {series.map((item: any) => (
          <Link
            href={`/series/${item._id}`}
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
              <p className="seasons">Seasons: {item.totalSeasons}</p>
            </div>
          </Link>
        ))}{' '}
        {series.map((item: any) => (
          <Link
            href={`/series/${item._id}`}
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
              <p className="seasons">Seasons: {item.totalSeasons}</p>
            </div>

            <div className="filter" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Library;
