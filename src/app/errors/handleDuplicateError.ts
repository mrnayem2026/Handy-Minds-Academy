/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

export const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const message = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Duplicate Error',
    errorSources,
  };
};
