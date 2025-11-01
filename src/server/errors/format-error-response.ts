import { AppError } from '@/config/error';
import { ZodError } from 'zod';

interface ErrorResponse {
  statusCode: number;
  body: {
    status: 'error';
    message: string;
    stack?: string;
  };
}

export function formatErrorResponse(error: unknown, environment: string) {
  if (error instanceof AppError)
    return {
      statusCode: error.statusCode,
      body: {
        status: 'error',
        message: error.message,
        ...(environment === 'development' && { stack: error.stack }),
      },
    };

  if (error instanceof ZodError)
    return {
      statusCode: 400,
      body: {
        status: 'error',
        message: error.message,
        ...(environment === 'development' && { stack: error.stack }),
      },
    };

  return {
    statusCode: 500,
    body: {
      status: 'error',
      message: 'Internal Server Error',
    },
  };
}
