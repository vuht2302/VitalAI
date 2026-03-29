import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { verifyAuth } from '@/middleware/auth';
import { errorHandler } from '@/middleware/errorHandler';

// GET user profile
export async function GET(req: NextRequest) {
  try {
    const auth = verifyAuth(req);
    if (!auth.isValid) {
      return NextResponse.json(
        { success: false, message: auth.error },
        { status: 401 }
      );
    }

    await connectDB();

    const user = await User.findById(auth.userId).select('-password');
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, user },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// UPDATE user profile
export async function PUT(req: NextRequest) {
  try {
    const auth = verifyAuth(req);
    if (!auth.isValid) {
      return NextResponse.json(
        { success: false, message: auth.error },
        { status: 401 }
      );
    }

    await connectDB();

    const { name, age, height, weight, goal, activityLevel } = await req.json();

    const user = await User.findByIdAndUpdate(
      auth.userId,
      {
        name,
        age,
        height,
        weight,
        goal,
        activityLevel,
        updatedAt: new Date(),
      },
      { new: true }
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Profile updated successfully',
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
