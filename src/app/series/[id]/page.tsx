import MediaDetails from '@/components/mediaDetails/MediaDetails';
import './page.scss';

const SingleSeries = ({ params }: { params: { id: String } }) => {
  const { id } = params;
  return (
    <div className="singleSeries">
      <MediaDetails
        route="series"
        id={id}
      />
    </div>
  );
};

export default SingleSeries;
