import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Progress from '@/models/Progress';
import { verifyAuth } from '@/middleware/auth';
import { errorHandler } from '@/middleware/errorHandler';

type RouteContext = { params: Promise<{ id: string }> };

// GET single progress log
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

    const progress = await Progress.findOne({
      _id: id,
      userId: auth.userId,
    });

    if (!progress) {
      return NextResponse.json(
        { success: false, message: 'Progress log not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, progress },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// UPDATE progress log
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

    const progress = await Progress.findOneAndUpdate(
      { _id: id, userId: auth.userId },
      updates,
      { new: true }
    );

    if (!progress) {
      return NextResponse.json(
        { success: false, message: 'Progress log not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Progress log updated successfully', progress },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// DELETE progress log
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

    const progress = await Progress.findOneAndDelete({
      _id: id,
      userId: auth.userId,
    });

    if (!progress) {
      return NextResponse.json(
        { success: false, message: 'Progress log not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Progress log deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
