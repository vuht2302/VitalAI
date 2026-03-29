import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';
import { verifyAuth } from '@/middleware/auth';
import { errorHandler } from '@/middleware/errorHandler';

// GET all blog posts
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured') === 'true';

    let query: any = {};
    if (category) query.category = category;
    if (featured) query.featured = true;

    const posts = await BlogPost.find(query)
      .populate('author', 'name email')
      .sort({ publishedAt: -1 })
      .limit(20);

    return NextResponse.json(
      { success: true, count: posts.length, posts },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

// CREATE new blog post
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

    const { title, content, excerpt, category, tags, featured, image } = await req.json();

    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: 'Title and content are required' },
        { status: 400 }
      );
    }

    const post = await BlogPost.create({
      title,
      content,
      excerpt: excerpt || content.substring(0, 100),
      author: auth.userId,
      category,
      tags,
      featured,
      image,
      publishedAt: new Date(),
    });

    const populatedPost = await post.populate('author', 'name email');

    return NextResponse.json(
      {
        success: true,
        message: 'Blog post created successfully',
        post: populatedPost,
      },
      { status: 201 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
