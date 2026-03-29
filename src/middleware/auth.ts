import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

export function verifyAuth(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return {
        isValid: false,
        error: 'Missing authentication token',
      };
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    return {
      isValid: true,
      userId: decoded.userId,
      email: decoded.email,
    };
  } catch (error) {
    return {
      isValid: false,
      error: 'Invalid or expired token',
    };
  }
}

export function createToken(userId: string, email: string) {
  const token = jwt.sign(
    { userId, email },
    process.env.JWT_SECRET!,
    { expiresIn: process.env.JWT_EXPIRE || '7d' }
  );
  return token;
}
