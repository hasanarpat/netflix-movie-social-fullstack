import { Episodes } from '@/models/Episodes';
import { connectToDb } from '@/utils/db/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    await connectToDb();

    const episode = await Episodes.find();

    return NextResponse.json(episode, { status: 200 });
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

    const episode = new Episodes(await req.json());
    const response = await episode.save();

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};
