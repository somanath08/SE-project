// Controller to handle all login/* routes
/* eslint-disable no-console */
import Courses from '../Models/Course.model';

exports.addCourse = (request, response) => {
  const newCourse = new Courses({
    facId: request.body.facId,
    courseType: request.body.courseType,
    courseName: request.body.coursename,
    credits: request.body.credits,
    prerequisites: request.body.prerequisites,
  });
  newCourse.save((err) => {
    if (err) return response.send(err);
    return response.send('Saved');
  });
};
