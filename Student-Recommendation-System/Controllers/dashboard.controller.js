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
  console.log(`${JSON.stringify(request.params, null, 4)}`);
  Student.findOne({ user: request.params.user }).exec((err, doc) => {
    console.log('Enrolled', doc);
    if (err) console.log(err.message);
    if (doc) {
      return response.send(doc.courses);
    }
    return response.send([]);
  });
};

exports.addCourses = (request, response) => {
  console.log('Added', request.body);
  Student.updateOne({ user: request.params.id }, { $set: { courses: request.body } }).exec(
    (err, doc) => {
      console.log(doc);
      for (let i = 0; i < request.body.length; i += 1) {
        Courses.updateOne(
          { courseId: request.body[i] },
          { $push: { registered: request.params.id } },
        ).exec((err1, res) => {
          if (err1) console.log(err1.message);
          console.log(res);
        });
      }
      if (err) console.log(err.message);
      return response.send('Saved');
    },
  );
};

exports.getFloatedCourse = (request, response) => {
  Courses.findOne({ facId: request.params.id }).exec((err, doc) => {
    console.log(doc);
    if (err) console.log(err.message);
    if (doc) {
      return response.send(doc);
    }
    return response.send({});
  });
};
