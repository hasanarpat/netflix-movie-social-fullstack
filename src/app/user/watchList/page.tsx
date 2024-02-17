import Image from 'next/image';
import './page.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import Link from 'next/link';
import { BiPlayCircle } from 'react-icons/bi';
import { getServerSession } from 'next-auth';

let userId = '';

const getData = async (userEmail: string) => {
  const response = await fetch(`http://localhost:3000/api/user`, {
    //   next: {
    //     revalidate: 10,
    //   },
    cache: 'no-cache',
  });
  if (!response.ok) return 'Fetch failed';

  const users = await response.json();
  const user = users.filter((user: any) => user.email === userEmail);

  userId = user[0]._id;

  const responseWL = await fetch(
    `http://localhost:3000/api/watchList/${userId}`,
    {
      //   next: {
      //     revalidate: 10,
      //   },
      cache: 'no-cache',
    }
  );
  if (!responseWL.ok) return 'Fetch failed';

  const wl = await responseWL.json();
  return wl;
};

const WatchList = async () => {
  const session = await getServerSession();

  const getFavorites = async () => {
    if (session && session.user) {
      if (typeof session.user.email === 'string') {
        const wl = await getData(session?.user?.email);

        return getFavoritesDetails(wl[0].favorites);
      }
    }
  };

  const getFavoritesDetails = async (favorites: any) => {
    let array = [];
    for (let i = 0; i < favorites.length; i++) {
      try {
        const response = await fetch(
          `http:localhost:3000/api/movies/${favorites[i]}`
        );
        const data = await response.json();
        array.push(data);
      } catch (error) {
        console.error(`Error fetching data for element ${i}:`, error);
      }
    }
    return array;
  };

  const favorites = await getFavorites();

  const handleDelete = async (formData: FormData) => {
    'use server';
    const id = formData.get('id');
    // console.log(id);
    await fetch(`http://localhost:3000/api/watchList/${userId}`, {
      body: JSON.stringify({ id }),
      method: 'DELETE',
      cache: 'no-cache',
    });
  };

  return (
    <div className='watchList'>
      <div className='wrapper'>
        <h2 className='desc'>
          {session && (
            <span style={{ marginRight: 12, color: 'red', fontWeight: 700 }}>
              {session.user?.name?.toUpperCase()}
            </span>
          )}
          Your watchList, find your favorites and watch laters here!
        </h2>
        {favorites != undefined && (
          <ul className='list'>
            {favorites.map((item: any) => (
              <li className='item' key={item._id}>
                <div className='poster'>
                  <Image
                    alt={item.title}
                    src={item.poster.replace(/'/g, '')}
                    fill
                    className='img'
                  />
                </div>
                <h2 className='title'>{item.title}</h2>
                <span>{item.year}</span>
                <div className='buttons'>
                  <Link
                    href={`/movies/${item._id}/play`}
                    className='play'
                    aria-details='play'
                    aria-label='play'
                  >
                    <BiPlayCircle />
                  </Link>
                  <form className='delete' action={handleDelete}>
                    <button
                      type='submit'
                      name='id'
                      value={item._id}
                      aria-details='delete'
                      aria-label='delete'
                    >
                      <AiOutlineDelete />
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WatchList;
