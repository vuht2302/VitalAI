import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';
import { verifyAuth } from '@/middleware/auth';
import { errorHandler } from '@/middleware/errorHandler';

type RouteContext = { params: Promise<{ id: string }> };

// GET single blog post by slug or ID
export async function GET(
  req: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;
    await connectDB();

    const post = await BlogPost.findOne({
      $or: [{ _id: id }, { slug: id }],
    }).populate('author', 'name email');

    if (!post) {
      return NextResponse.json(
        { success: false, message: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Increment views
    post.views = (post.views || 0) + 1;
    await post.save();

    return NextResponse.json(
      { success: true, post },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// UPDATE blog post
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

    const post = await BlogPost.findOne({
      _id: id,
      author: auth.userId,
    }).populate('author', 'name email');

    if (!post) {
      return NextResponse.json(
        { success: false, message: 'Blog post not found or unauthorized' },
        { status: 404 }
      );
    }

    Object.assign(post, updates);
    await post.save();

    return NextResponse.json(
      { success: true, message: 'Blog post updated successfully', post },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// DELETE blog post
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

    const post = await BlogPost.findOneAndDelete({
      _id: id,
      author: auth.userId,
    });

    if (!post) {
      return NextResponse.json(
        { success: false, message: 'Blog post not found or unauthorized' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Blog post deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
