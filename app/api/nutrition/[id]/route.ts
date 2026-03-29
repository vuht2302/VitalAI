import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Nutrition from '@/models/Nutrition';
import { verifyAuth } from '@/middleware/auth';
import { errorHandler } from '@/middleware/errorHandler';

type RouteContext = { params: Promise<{ id: string }> };

// GET single nutrition log
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

    const nutrition = await Nutrition.findOne({
      _id: id,
      userId: auth.userId,
    });

    if (!nutrition) {
      return NextResponse.json(
        { success: false, message: 'Nutrition log not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, nutrition },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// UPDATE nutrition log
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

    const nutrition = await Nutrition.findOneAndUpdate(
      { _id: id, userId: auth.userId },
      updates,
      { new: true }
    );

    if (!nutrition) {
      return NextResponse.json(
        { success: false, message: 'Nutrition log not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Nutrition log updated successfully', nutrition },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// DELETE nutrition log
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

    const nutrition = await Nutrition.findOneAndDelete({
      _id: id,
      userId: auth.userId,
    });

    if (!nutrition) {
      return NextResponse.json(
        { success: false, message: 'Nutrition log not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Nutrition log deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
