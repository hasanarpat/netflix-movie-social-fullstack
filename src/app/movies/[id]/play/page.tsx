import Link from 'next/link';
import './page.scss';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
const PlayMovie = () => {
  return (
    <div className="playMovie">
      <Link
        href="/"
        className="back"
      >
        <IoArrowBackCircleOutline className="icon" />
        Back to Home
      </Link>
      <video
        autoPlay={false}
        src="/VforV.mp4"
        loop
        className="video"
        controls
      />
    </div>
  );
};

export default PlayMovie;
