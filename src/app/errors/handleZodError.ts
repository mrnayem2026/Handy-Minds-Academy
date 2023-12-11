import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from '../interface/error';

const handleZodError = (err: ZodError) => {
 
    const errorSources : TErrorSources = err.issues.map((issue : ZodIssue)=>{
        console.log(issue);

        return {
            path:issue.path[1],// TODO: path[1] ai ta change hobe.
            message:issue.message
        }
        
    })



  const statusCode = 400;
  return {
    statusCode,
    message: 'Zod Validation Error',
    errorSources,
  };
};

export default handleZodError;
