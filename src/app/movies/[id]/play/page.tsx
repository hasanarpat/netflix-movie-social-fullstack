'use client';
import { useEffect, useRef, useState } from 'react';
import './page.scss';
import BackButton from '@/components/backButton/BackButton';
import PopupDetail from '@/components/popupDetail/PopupDetail';
import { usePathname } from 'next/navigation';

const mockDetail = {
  title: '',
  plot: '',
  year: '',
  director: [],
};

const PlayMovie = () => {
  const pathName = usePathname();
  const id = pathName.split('movies/')[1].split('/play')[0]; // getting id of video from url

  const [details, setDetails] = useState(mockDetail);
  const [showDetails, setShowDetails] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement
        .requestFullscreen()
        .catch((err) => console.error("Couldn't open video full screen.", err));
    }
  }, []);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetch(`/api/movies/${id}`);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const data = await response.json();
        const { title, plot, year, director, ...other } = data;
        setDetails({
          title,
          plot,
          year,
          director,
        });
      } catch (error) {
        console.error('Hata:', error);
      }
    }

    fetchDetails();
  });

  return (
    <div className="playMovie">
      <BackButton desc="Go Back" />
      <PopupDetail
        detail={details}
        visible={showDetails}
      />
      <video
        autoPlay={true}
        ref={videoRef}
        loop
        className="video"
        controls
        onPlay={() => setShowDetails(false)}
        onPause={() => setShowDetails(true)}
      >
        <source
          src="/VforV.mp4"
          type="video/mp4"
          className="source"
        />
        Your browser do not support video api
      </video>
    </div>
  );
};

export default PlayMovie;
