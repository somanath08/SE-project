import { Router } from 'express';

const callback = require('../Controllers/advisor.controller');

const router = Router();
router.get('/start/1/:id', callback.getAdviceForSemStart);
router.get('/start/2/:id', callback.getAdviceForSem2Start);
router.get('/mid/:grade', callback.getAdviceForSemMid);
module.exports = router;
