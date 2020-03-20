import { Router } from 'express';
import ctrl from './ctrl';

const router = Router();

router.get('/', ctrl.read);
router.post('/', ctrl.write);

export default router;
