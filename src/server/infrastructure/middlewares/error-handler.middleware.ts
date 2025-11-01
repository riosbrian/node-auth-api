import { envs } from '@/config/envs';
import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { formatErrorResponse } from '@/server/errors/format-error-response';

export const errorHandler: ErrorRequestHandler = function (
  err: unknown,
  req,
  res,
  next
) {
  const { statusCode, body } = formatErrorResponse(err, envs.NODE_ENV);
  res.status(statusCode).json(body);
};
