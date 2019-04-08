import { Router } from 'express';

const callback = require('../Controllers/advisor.controller');

const router = Router();
router.get('/start/:id', callback.getAdiveForSemStart);
module.exports = router;
