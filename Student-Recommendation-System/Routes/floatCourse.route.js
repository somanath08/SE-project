import { Router } from 'express';

const callback = require('../Controllers/floatCourse.controller');

const router = Router();
router.post('/add', callback.addCourse);
module.exports = router;
