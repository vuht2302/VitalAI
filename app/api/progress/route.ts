import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Progress from '@/models/Progress';
import { verifyAuth } from '@/middleware/auth';
import { errorHandler } from '@/middleware/errorHandler';

// GET all progress logs for user
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

    const progressLogs = await Progress.find({ userId: auth.userId }).sort({
      date: -1,
    });

    return NextResponse.json(
      { success: true, count: progressLogs.length, progressLogs },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// CREATE new progress log
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

    const { weight, bodyFat, muscleMass, measurements, photos, notes, date } = await req.json();

    if (!weight) {
      return NextResponse.json(
        { success: false, message: 'Weight is required' },
        { status: 400 }
      );
    }

    const progress = await Progress.create({
      userId: auth.userId,
      weight,
      bodyFat,
      muscleMass,
      measurements,
      photos,
      notes,
      date: date || new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Progress log created successfully',
        progress,
      },
      { status: 201 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
