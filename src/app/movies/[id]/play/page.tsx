import './page.scss';
import BackButton from '@/components/backButton/BackButton';
const PlayMovie = () => {
  return (
    <div className="playMovie">
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

export default PlayMovie;
