import { getData } from '@/utils/db/getData';
import './mediaDetails.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IoAddOutline, IoPlay } from 'react-icons/io5';
import { getServerSession } from 'next-auth';

const MediaDetails = async ({ route, id }: { route: String; id: String }) => {
  const data = await getData(route, id);
  // const sectionStyle = {
  //   backgroundImage: `url("${data.poster.replace(/'/g, '')}")`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${data.poster.replace(
  //     /'/g,
  //     ''
  //   )}")`,
  // };

  const session = await getServerSession();

  const addWatchList = async (formData: FormData) => {
    'use server';
    const id = data._id;
    if (session && session.user != undefined) {
      const res = await fetch(
        `http://localhost:3000/api/watchList/${session.user.email}`,
        {
          method: 'POST',
          body: JSON.stringify({ id }),
        }
      );
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <section className='mediaDetails'>
      <div className='imgBackground'>
        <Image
          alt={data.title}
          src={data.img.replace(/'/g, '')}
          fill
          className='background'
        />
      </div>
      <div className='top'>
        <div className='imgContainer'>
          <Image
            alt={data.title}
            src={data.poster.replace(/'/g, '')}
            fill
            className='img globalBoxShadow'
          />
        </div>
        <div className='hero'>
          <h1 className='title'>{data.title}</h1>
          <div className='date'>
            <span className='year'>{data.year}</span>
            <span className='rated'>{data.rated}</span>
            <span className='runtime'>{data.runtime}</span>
            <span className='released'>{data.released}</span>
          </div>
          <p className='desc'>{data.plot}</p>
          <div className='buttons'>
            <button className='watch'>
              <Link className='watch' href={`/${route}/${data._id}/play`}>
                <IoPlay style={{ marginRight: 10, fontSize: 16 }} />
                <span>Watch Now</span>
              </Link>
            </button>
            <form action={addWatchList} className='form'>
              <button
                className='addWatchList'
                type='submit'
                name='id'
                value={data._id}
              >
                <IoAddOutline style={{ marginRight: 10, fontSize: 16 }} />
                <span>Add to WatchList</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='info'>
        <p className='country'>Country: {data.country}</p>
        <p className='languages'>Languages: {data.language}</p>
        <p className='awards'>Awards: {data.awards}</p>
        <p className='genre'>Genre: {data.genre}</p>
        <div className='ratings'>
          <div className='rating'>
            <span>IMDB Rating</span>
            <span>{data.imdbRating}</span>
          </div>
          <div className='rating'>
            <span>IMDB Votes</span>
            <span>{data.imdbVotes}</span>
          </div>
          {data.ratings.length > 0 &&
            data.ratings.map((item: any) => (
              <div className='rating' key={item._id}>
                <span>{item.source}</span>
                <span>{item.value}</span>
              </div>
            ))}
        </div>
      </div>
      <div className='details'>
        <table className='table'>
          <thead>
            <tr className='head'>
              <th className='row'>
                <td className='col'></td>
                <td className='col'></td>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='row'>
              <td className='col'>Director</td>
              <td className='col'>{data.director}</td>
            </tr>
            <tr className='row'>
              <td className='col'>Writer</td>
              <td className='col'>{data.writer}</td>
            </tr>
            <tr className='row'>
              <td className='col'>Actors</td>
              <td className='col'>{data.actors}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='comments'>{/* Comments Section */}</div>
    </section>
  );
};

export default MediaDetails;
