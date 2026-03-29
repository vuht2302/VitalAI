import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Workout from '@/models/Workout';
import { verifyAuth } from '@/middleware/auth';
import { errorHandler } from '@/middleware/errorHandler';

// GET all workouts for user
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

    const workouts = await Workout.find({ userId: auth.userId }).sort({
      date: -1,
    });

    return NextResponse.json(
      { success: true, count: workouts.length, workouts },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// CREATE new workout
export async function POST(req: NextRequest) {
  try {
    const auth = verifyAuth(req);
    if (!auth.isValid) {
      return NextResponse.json(
        { success: false, message: auth.error },
        { status: 401 }
      );
    }

    await connectDB();

    const { name, description, category, exercises, duration, calories, intensity, notes, date } = await req.json();

    if (!name || !duration) {
      return NextResponse.json(
        { success: false, message: 'Name and duration are required' },
        { status: 400 }
      );
    }

    const workout = await Workout.create({
      userId: auth.userId,
      name,
      description,
      category,
      exercises,
      duration,
      calories,
      intensity,
      notes,
      date: date || new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Workout created successfully',
        workout,
      },
      { status: 201 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
