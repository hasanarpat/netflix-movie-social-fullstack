'use client';
import { useState } from 'react';
import './category.scss';
import { useRouter } from 'next/navigation';

const Category = ({ type }: { type: string }) => {
  const [category, setCategory] = useState(0);

  const router = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    router.push(`/movies/genre/${selectedValue}`);
  };

  return (
    <div className="category">
      {/* <span>{type === 'movie' ? 'Movies' : 'Series'}</span> */}
      <span>Category:</span>
      <select
        name="genre"
        id="genre"
        onChange={handleSelectChange}
      >
        <option value="Genre">Genre</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Historical">Historical</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Sci-fi">Sci-fi</option>
        <option value="Thriller">Thriller</option>
        <option value="Western">Western</option>
        <option value="Animation">Animation</option>
        <option value="Drama">Drama</option>
        <option value="Documentary">Documentary</option>
      </select>
    </div>
  );
};

export default Category;
