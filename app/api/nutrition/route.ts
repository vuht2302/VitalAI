import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Nutrition from '@/models/Nutrition';
import { verifyAuth } from '@/middleware/auth';
import { errorHandler } from '@/middleware/errorHandler';

// GET all nutrition logs for user
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

    const nutritionLogs = await Nutrition.find({ userId: auth.userId }).sort({
      date: -1,
    });

    return NextResponse.json(
      { success: true, count: nutritionLogs.length, nutritionLogs },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// CREATE new nutrition log
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

    const { meals, totalCalories, totalProtein, totalCarbs, totalFat, totalFiber, notes, date } = await req.json();

    const nutrition = await Nutrition.create({
      userId: auth.userId,
      meals,
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFat,
      totalFiber,
      notes,
      date: date || new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Nutrition log created successfully',
        nutrition,
      },
      { status: 201 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
