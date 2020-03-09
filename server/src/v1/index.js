import { Router } from 'express';

import promise from './promise';

const router = Router();

router.get('/', (req, res) => {
  res.json({});
});

router.use('/promise', promise);

export default router;
