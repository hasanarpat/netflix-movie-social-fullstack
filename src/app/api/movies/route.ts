import { Movie } from '@/models/Movie';
import { connectToDb } from '@/utils/db/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    await connectToDb();

    const movies = await Movie.find();

    return NextResponse.json(movies, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectToDb();

    const movie = new Movie(await req.json());
    const response = await movie.save();

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};
