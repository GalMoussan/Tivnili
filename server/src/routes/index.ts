import { Router } from 'express';
import { healthRouter } from './health.js';
import { contactRouter } from './contact.js';

const router = Router();

router.use('/api/health', healthRouter);
router.use('/api/contact', contactRouter);

export default router;
