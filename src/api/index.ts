import express from 'express';

import emojis from './emojis';
import { MessageResponse } from '../interfaces';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '👋 🌎',
  });
});

router.use('/emojis', emojis);

export default router;
