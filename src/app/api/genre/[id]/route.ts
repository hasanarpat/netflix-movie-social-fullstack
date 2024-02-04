import { Movie } from '@/models/Movie';
import { Series } from '@/models/Series';
import { connectToDb } from '@/utils/db/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    await connectToDb();
    const movies = await Movie.find();
    const series = await Series.find();
    const moviesWithGenre = movies.filter((movie) => movie.genre.includes(id));
    const seriesWithGenre = series.filter((serie) => serie.genre.includes(id));

    const result = [...moviesWithGenre, ...seriesWithGenre];
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 500 }
    );
  }
};
