import { Router } from 'express';
import ctrl from './ctrl';

const router = Router();

router.get('/', ctrl.read);

export default router;
