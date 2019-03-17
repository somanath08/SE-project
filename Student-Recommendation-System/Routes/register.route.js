import { Router } from 'express';

const callback = require('../Controllers/register.controller');

const router = Router();
router.post('/add', callback.addUser);
module.exports = router;
