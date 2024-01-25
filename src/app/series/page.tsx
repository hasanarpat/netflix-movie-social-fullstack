import Library from '@/components/library/Library';
import './page.scss';

const Series = () => {
  return (
    <div className="series">
      <div className="container">
        <div className="top">
          <h1 className="title">Series</h1>
          <p className="desc">
            Find and explore endless numbers of exiting tv series and shows
          </p>
          <p className="desc">
            Consequat ipsum est adipisicing duis ut ea sunt laborum sunt
            deserunt culpa. Dolore nostrud anim nisi voluptate nisi aute sit est
            ex nostrud commodo aute aute ad. Aliqua labore ipsum proident
            occaecat Lorem. Lorem labore velit proident et excepteur ex esse ut
            duis ex culpa ex exercitation nostrud. Irure pariatur nulla aliqua
            tempor. Voluptate occaecat cupidatat anim eu ex id veniam duis magna
            esse laborum. Cillum tempor sit tempor aliqua adipisicing voluptate
            consequat.
          </p>
          <div className="seriesCategory">
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
        </div>
        <Library />
      </div>
    </div>
  );
};

export default Series;
