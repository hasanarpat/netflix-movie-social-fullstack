import { WatchList } from '@/models/WatchList';
import { connectToDb } from '@/utils/db/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    await connectToDb();

    const watchList = await WatchList.find({ userId: id });

    return NextResponse.json(watchList, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};

// Decide when adn how to create user watchlist and add item to it

// export const POST = async (
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   const { id } = params;
//   try {
//     await connectToDb();

//     const movie = new WatchList(await req.json());
//     const response = await movie.save();

//     return NextResponse.json(response, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json(
//       { title: error._message, message: error.message },
//       { status: 400 }
//     );
//   }
// };

// export const PUT = async (
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   const { id } = params;
//   try {
//     await connectToDb();

//     const watchList = await req.json();
//     const response = await WatchList.findOneAndUpdate({ _id: id }, watchList);

//     return NextResponse.json(response, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json(
//       { title: error._message, message: error.message },
//       { status: 400 }
//     );
//   }
// };

// export const DELETE = async (
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   const { id } = params;
//   try {
//     await connectToDb();
//     const response = await WatchList.findByIdAndDelete(id);

//     return NextResponse.json(response, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json(
//       { title: error._message, message: error.message },
//       { status: 400 }
//     );
//   }
// };
