import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

export const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const id = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: `This ${id} id is invalid.`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid Id',
    errorSources,
  };
};
