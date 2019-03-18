import { Router } from 'express';

const callback = require('../Controllers/dashboard.controller');

const router = Router();
router.get('/details/:user', callback.getDetails);
module.exports = router;
