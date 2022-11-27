import express from 'express';

import { MessageResponse } from '../interfaces';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '👋 🌎',
  });
});

export default router;
