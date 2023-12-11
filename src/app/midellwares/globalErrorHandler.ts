/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler } from 'express';
import httpStatus from 'http-status';
import { ZodError } from 'zod';
import { TErrorSources } from '../interface/error';

import config from '../config';
import handleZodError from '../errors/handleZodError';

const globalErrorHandler : ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  let message = err.message || 'Something went wrong from globalErrorHandler';
  let errorSources:  TErrorSources =[ {
    path:'',
    message:'Something went wrong!',
}]

  if(err instanceof ZodError)
  {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorSources = simplifiedError.errorSources
  }




  return res.status(statusCode).json({
    success: false,
    message: message,
    errorSources,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
    error: err,
  });
};

export default globalErrorHandler;
