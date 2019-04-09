// Controller to handle all login/* routes
/* eslint-disable no-console */
import Courses from '../Models/Course.model';

exports.addCourse = (request, response) => {
  console.log(request.body, 'float');
  const newCourse = new Courses({
    facId: request.body.facId,
    courseType: request.body.courseType,
    courseName: request.body.courseName,
    credits: request.body.credits,
    courseId: request.body.courseId,
    prerequisites: request.body.prerequisites,
    semester: request.body.sem,
  });
  newCourse.save((err) => {
    if (err) return response.send(err);
    return response.send('Saved');
  });
};
