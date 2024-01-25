import { Comment } from '@/models/Comment';
import { connectToDb } from '@/utils/db/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connectToDb();

    const comment = await Comment.findById(id);

    return NextResponse.json(comment, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connectToDb();

    const commentData = await req.json();
    const response = await Comment.findOneAndReplace({ _id: id }, commentData);

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connectToDb();

    const response = await Comment.findByIdAndDelete(id);

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};
