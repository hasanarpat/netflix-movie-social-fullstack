import MediaDetails from '@/components/mediaDetails/MediaDetails';
import './page.scss';

const SingleMovie = ({ params }: { params: { id: String } }) => {
  const { id } = params;
  return (
    <div className="singleMovie">
      <MediaDetails
        route="movies"
        id={id}
      />
    </div>
  );
};

export default SingleMovie;
