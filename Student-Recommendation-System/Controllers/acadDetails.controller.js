// Controller to handle all login/* routes
/* eslint-disable no-console */
import Student from '../Models/Student.model';
import Users from '../Models/Users.model';

exports.addAcadDetails = (request, response) => {
  // Update the user to have details

  const newUserDetails = new Student({
    user: request.body.user,
    percentageTen: request.body.percentageTen,
    percentagePUC: request.body.percentagePUC,
    percentageUni: request.body.percentageUni,
    StreamPUC: request.body.streamPUC,
    StreamUni: request.body.streamUni,
  });
  newUserDetails.save((err) => {
    if (err) return console.error(err);
    Users.findOne({ user: request.body.user }).exec((err1, doc) => {
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
