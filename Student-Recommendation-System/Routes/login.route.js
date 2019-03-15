import { Router } from 'express';
import { verifyCredentials } from '../Controllers/login.controller';

const router = Router();
router.post('/verify', verifyCredentials);
export default router;
