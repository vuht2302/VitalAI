import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Workout from '@/models/Workout';
import { verifyAuth } from '@/middleware/auth';
import { errorHandler } from '@/middleware/errorHandler';

type RouteContext = { params: Promise<{ id: string }> };

// GET single workout
export async function GET(
  req: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;
    const auth = verifyAuth(req);
    if (!auth.isValid) {
      return NextResponse.json(
        { success: false, message: auth.error },
        { status: 401 }
      );
    }

    await connectDB();

    const workout = await Workout.findOne({
      _id: id,
      userId: auth.userId,
    });

    if (!workout) {
      return NextResponse.json(
        { success: false, message: 'Workout not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, workout },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// UPDATE workout
export async function PUT(
  req: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;
    const auth = verifyAuth(req);
    if (!auth.isValid) {
      return NextResponse.json(
        { success: false, message: auth.error },
        { status: 401 }
      );
    }

    await connectDB();

    const updates = await req.json();

    const workout = await Workout.findOneAndUpdate(
      { _id: id, userId: auth.userId },
      updates,
      { new: true }
    );

    if (!workout) {
      return NextResponse.json(
        { success: false, message: 'Workout not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Workout updated successfully', workout },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// DELETE workout
export async function DELETE(
  req: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;
    const auth = verifyAuth(req);
    if (!auth.isValid) {
      return NextResponse.json(
        { success: false, message: auth.error },
        { status: 401 }
      );
    }

    await connectDB();

    const workout = await Workout.findOneAndDelete({
      _id: id,
      userId: auth.userId,
    });

    if (!workout) {
      return NextResponse.json(
        { success: false, message: 'Workout not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Workout deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
