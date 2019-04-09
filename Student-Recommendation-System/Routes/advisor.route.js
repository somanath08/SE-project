import { Router } from 'express';

const callback = require('../Controllers/advisor.controller');

const router = Router();
router.get('/start/1/:id', callback.getAdiveForSemStart);
router.get('/start/2/:id', callback.getAdviceForSem2Start);
router.get('/mid/:user/:id/:grade', callback.getAdiveForMidSem);
module.exports = router;
