import { Movie } from '@/models/Movie';
import { connectToDb } from '@/utils/db/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    await connectToDb();

    const movies = await Movie.find();

    const featuredMovie = movies[Math.floor(Math.random() * 10)];

    return NextResponse.json(featuredMovie, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};
