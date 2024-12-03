import { Router } from 'express';

import emojis from './emojis.js';
import game from './game.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/game', game );

export default router;
