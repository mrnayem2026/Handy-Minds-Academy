import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/midellwares/globalErrorHandler';
import router from './app/routes';
import { notFound } from './app/midellwares/notFound';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Nayem! I am from Handy minds academy');
});



// Handle Global Error
app.use(globalErrorHandler);


// Not Found Handle 
app.use(notFound)
export default app;
