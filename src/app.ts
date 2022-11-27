import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import api from './api';
import * as middlewares from './middlewares';
import { MessageResponse } from './interfaces';

dotenv.config();

const app = express();

morgan.token('gh-event', (req) => req.headers['x-github-event'] as string);
app.use(morgan(':method :url :status :response-time ms - :gh-event'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/hook', (req: Request, res: Response) => {
  // Call your action on the request here
  res.status(200).end(); // Responding is important
});

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '💩',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
