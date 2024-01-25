import { Comment } from '@/models/Comment';
import { connectToDb } from '@/utils/db/connect';
import { helper } from '@/utils/db/helper';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    await connectToDb();

    //IMPLEMENTED HELPER FUNCTION TO STANDARDIZE

    // const comments = await Comment.find();
    const comments = await helper('GET', 'comments', false);

    return NextResponse.json(comments, { status: 200 });
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

    //IMPLEMENTED HELPER FUNCTION TO STANDARDIZE

    // const comment = new Comment(await req.json());
    // const response = await comment.save();

    const response = await helper(
      'POST',
      'comments',
      false,
      undefined,
      await req.json()
    );

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { title: error._message, message: error.message },
      { status: 400 }
    );
  }
};
