import { NextResponse } from 'next/server';

export function errorHandler(error: any, statusCode: number = 500) {
  console.error('Error:', error);

  let message = 'Internal Server Error';

  if (error.message) {
    message = error.message;
  }

  if (error.name === 'ValidationError') {
    statusCode = 400;
  }

  if (error.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid ID';
  }

  if (error.code === 11000) {
    statusCode = 400;
    message = 'Duplicate field value entered';
  }

  return NextResponse.json(
    {
      success: false,
      message,
      ...(process.env.NODE_ENV === 'development' && { error: error.message }),
    },
    { status: statusCode }
  );
}
