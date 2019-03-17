// Controller to handle all login/* routes
/* eslint-disable no-console */
import Student from '../Models/Student.model';

exports.addAcadDetails = (request, response) => {
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
    return response.send('Saved');
  });
};

export default module;
