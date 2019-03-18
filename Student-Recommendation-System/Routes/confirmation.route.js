import { Router } from 'express';

const callback = require('../Controllers/confirmation.controller');

const router = Router();
router.get('/:token', callback.confirm);
module.exports = router;
