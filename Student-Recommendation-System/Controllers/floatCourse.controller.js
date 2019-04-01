// Controller to handle all login/* routes
/* eslint-disable no-console */
import Courses from '../Models/Course.model';

exports.addCourse = (request, response) => {
  const newCourse = new Courses({
    courseType: request.body.courseType,
    courseName: request.body.coursename,
    credits: request.body.credits,
    prerequisites: request.body.prerequisites,
  });
  newCourse.save((err) => {
    if (err) return console.error(err);
    return response.send('Saved');
  });
};
