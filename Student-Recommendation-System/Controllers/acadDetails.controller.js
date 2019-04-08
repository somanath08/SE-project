// Controller to handle all login/* routes
/* eslint-disable no-console */
import Student from '../Models/Student.model';
import Users from '../Models/Users.model';

exports.addAcadDetails = (request, response) => {
  // Update the user to have details

  const newUserDetails = new Student({
    user: request.body.puc.user,
    stream: request.body.puc.stream,
    uniStream: request.body.university.stream,
    algo: request.body.university.algo,
    os: request.body.university.os,
    database: request.body.university.database,
    networks: request.body.university.networks,
    programming: request.body.university.programming,
    data: request.body.university.data,
    ml: request.body.university.ml,
    grade: request.body.mtech.grade,
    pc: request.body.mtech.pc,
    dc: request.body.mtech.dc,
    cn: request.body.mtech.cn,
    cg: request.body.mtech.cg,
    nn: request.body.mtech.nn,
    ip: request.body.mtech.ip,
    sem: request.body.mtech.sem,
  });
  newUserDetails.save((err) => {
    if (err) return console.error(err);
    Users.findOne({ user: request.body.puc.user }).exec((err1, doc) => {
      if (err1) console.log(err1.message);
      if (doc) {
        console.log(`here1 ${doc}`);
        // eslint-disable-next-line no-param-reassign
        doc.hasDetails = true;
        doc.save((err2) => {
          if (err2) console.log(err2.message);
        });
      }
    });
    return response.send('Saved');
  });
};
