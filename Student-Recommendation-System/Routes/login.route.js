import { Router } from 'express';

const callback = require('../Controllers/login.controller');

const router = Router();
router.post('/verify', callback.verifyCredentials);
module.exports = router;
