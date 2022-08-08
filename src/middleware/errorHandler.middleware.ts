import { NextFunction, Request, Response } from 'express';

const errors: Record<string, number> = {
  ValidationError: 400,
  Unauthorized: 401,
  UnprocessableEntity: 422,
};
const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // if (!err.message.includes('required') && !err.message.includes('invalid')) {
  //   return res.status(errors.UnprocessableEntity).json({ message: err.message });
  // }
  const status = errors[err.name];
  if (!status) return res.status(500).json({ message: err.message });
  res.status(status).json({ message: err.message });
};

export default errorHandlerMiddleware;