import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
  } catch (error) {
    return NextResponse.json(
      { message: "Couldn't fetch user data" },
      { status: 400 }
    );
  }
};
