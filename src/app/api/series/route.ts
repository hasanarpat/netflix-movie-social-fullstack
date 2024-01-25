import { Series } from '@/models/Series';
import { connectToDb } from '@/utils/db/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    await connectToDb();

    const series = await Series.find();

    return NextResponse.json(series, { status: 200 });
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

    const series = new Series(await req.json());
    const response = await series.save();

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};
