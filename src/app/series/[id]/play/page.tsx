import './page.scss';
import BackButton from '@/components/backButton/BackButton';
const PlaySeries = () => {
  return (
    <div className="playSeries">
      <BackButton desc="Go Back" />
      <video
        autoPlay={true}
        src="/VforV.mp4"
        loop
        className="video"
        controls
      />
    </div>
  );
};

export default PlaySeries;
