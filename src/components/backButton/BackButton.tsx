'use client';
import { useRouter } from 'next/navigation';
import './backButton.scss';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const BackButton = ({ desc }: { desc: string }) => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className='back popup-text'>
      <IoArrowBackCircleOutline className='icon' />
      {desc}
    </button>
  );
};

export default BackButton;
