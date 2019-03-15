import { Router } from 'express';
import { addUser } from '../Controllers/login.controller';

const router = Router();
router.post('/add', addUser);
export default router;
