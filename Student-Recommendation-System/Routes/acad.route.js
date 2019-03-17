import { Router } from 'express';

const callback = require('../Controllers/acadDetails.controller');

const router = Router();
router.post('/add', callback.addAcadDetails);
module.exports = router;
