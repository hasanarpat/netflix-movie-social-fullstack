import Image from 'next/image';
import './app.scss';
import Featured from '@/components/featured/Featured';
import List from '@/components/list/List';

export default function Home() {
  return (
    <main className="main">
      <Featured type="movie" />
      <List title="Continue to watch" />
      <List title="Popular in Turkey" />
      <List title="Recommended For You" />
      <List title="From Your Watchlist" />
    </main>
  );
}
