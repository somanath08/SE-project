import { Router } from 'express';

const callback = require('../Controllers/login.controller');

const router = Router();
router.post('/verify', callback.verifyCredentials);
export default router;
