import { Movie } from '@/models/Movie';
import { Series } from '@/models/Series';
import { connectToDb } from '@/utils/db/connect';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { value } = body;
  console.log(value);
  try {
    await connectToDb();
    const movies = await Movie.find();
    const series = await Series.find();
    const moviesWithValue = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    const seriesWithValue = series.filter((serie) =>
      serie.title.toLowerCase().includes(value.toLowerCase())
    );

    const result = [...moviesWithValue, ...seriesWithValue];
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 500 }
    );
  }
};
