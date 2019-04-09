// Controller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';
import Courses from '../Models/Course.model';
import Student from '../Models/Student.model';

exports.getPersonalDetails = (request, response) => {
  console.log(`${JSON.stringify(request.params.user, null, 4)}`);
  Users.findOne({ user: request.params.user }).exec((err, doc) => {
    console.log(doc);
    if (err) console.log(err.message);
    if (doc) {
      return response.send(doc);
    }
    return response.send({});
  });
};

exports.getAllCourses = (request, response) => {
  console.log('here');
  Courses.find({}).exec((err, doc) => {
    console.log(doc, 'yoyo');
    if (err) console.log(err.message);
    if (doc) {
      return response.send(doc);
    }
    return response.send([]);
  });
};

exports.getCourseDetails = (request, response) => {
  console.log(`${JSON.stringify(request.params.user, null, 4)}`);
  Student.find({ user: request.params.id }).exec((err, doc) => {
    console.log(doc);
    if (err) console.log(err.message);
    if (doc) {
      return response.send(doc.courses);
    }
    return response.send([]);
  });
};
