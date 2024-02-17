import { User } from '@/models/User';
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

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    await connectToDb();

    const wlId = await req.json();

    const user = await User.findOne({ email: id });

    const wl = await WatchList.findOne({ userId: user._id });

    wl.favorites.push(wlId.id);

    wl.save();

    return NextResponse.json(wl, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};

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

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    await connectToDb();
    // console.log(id, 'from route api delete');
    const deleteItem = await req.json();
    const response = await WatchList.findOne({ userId: id });
    const { favorites } = response;

    // console.log(favorites, 'old');

    const newFavorites = favorites.filter(
      (item: string, i: number) => i !== favorites.indexOf(deleteItem.id)
    );

    // console.log(newFavorites, 'new');

    // const data = await response.json();
    // console.log(data, 'api delete');

    response.favorites = newFavorites;
    const data = await response.save();

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};
