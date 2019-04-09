import { Router } from 'express';

const callback = require('../Controllers/dashboard.controller');

const router = Router();
router.get('/details/course/all', callback.getAllCourses);
router.get('/details/personal/:user', callback.getPersonalDetails);
router.get('/details/course/:user', callback.getCourseDetails);
router.post('/details/course/add/:id', callback.addCourses);
router.get('/details/floated/:id', callback.getFloatedCourse);

module.exports = router;
