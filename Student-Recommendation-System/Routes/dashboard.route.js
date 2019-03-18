import { Router } from 'express';

const callback = require('../Controllers/dashboard.controller');

const router = Router();
router.get('/details', callback.getDetails);
module.exports = router;
