import { WatchList } from '@/models/WatchList';
import { connectToDb } from '@/utils/db/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    await connectToDb();

    const watchList = await WatchList.find();

    return NextResponse.json(watchList, { status: 200 });
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

    const watchList = new WatchList(await req.json());
    const response = await watchList.save();

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};
