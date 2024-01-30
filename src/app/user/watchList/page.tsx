import Image from 'next/image';
import './page.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import Link from 'next/link';
import { BiPlayCircle } from 'react-icons/bi';

const userId = '65aecf19f468c6f384162233';

const getData = async () => {
  const response = await fetch(
    `http://localhost:3000/api/watchList/${userId}`,
    {
      //   next: {
      //     revalidate: 10,
      //   },
      cache: 'no-cache',
    }
  );
  if (!response.ok) return 'Fetch failed';

  const data = await response.json();
  return data;
};

const getFavorites = async (favorites: [string]) => {
  const favoriteData = [];

  for (const item of favorites) {
    const response = await fetch(`http://localhost:3000/api/movies/${item}`);
    const { title, poster, year, _id } = await response.json();

    const favorite = { title, poster, year, _id };
    favoriteData.push(favorite);
  }

  return favoriteData;
};

const WatchList = async () => {
  const data = await getData();
  const favorites = await getFavorites(data[0].favorites);
  // console.log(favorites);

  const handleDelete = async (formData: FormData) => {
    'use server';
    const id = formData.get('id');
    // console.log(id);
    const response = await fetch(
      `http://localhost:3000/api/watchList/${userId}`,
      {
        cache: 'no-cache',
        body: JSON.stringify({ id }),
        method: 'DELETE',
      }
    );
  };

  return (
    <div className="watchList">
      <div className="wrapper">
        <h2 className="desc">
          Your watchList, find your favorites and watch laters here!
        </h2>
        <ul className="list">
          {favorites.map((item) => (
            <li
              className="item"
              key={item._id}
            >
              <div className="poster">
                <Image
                  alt={item.title}
                  src={item.poster.replace(/'/g, '')}
                  fill
                  className="img"
                />
              </div>
              <h2 className="title">{item.title}</h2>
              <span>{item.year}</span>
              <div className="buttons">
                <Link
                  href={`/movies/${item._id}/play`}
                  className="play"
                  aria-details="play"
                >
                  <BiPlayCircle />
                </Link>
                <form
                  className="delete"
                  action={handleDelete}
                >
                  <button
                    type="submit"
                    name="id"
                    value={item._id}
                  >
                    <AiOutlineDelete />
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WatchList;
