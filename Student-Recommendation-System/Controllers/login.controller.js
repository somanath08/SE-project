// COntroller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';
// const loginDetails = function (req, res) {
// //   find({ user: req.body.user }).exec((err, credentials) => {
// //     if (!credentials) return res.send('Not found')
// //     if (credentials.password === req.body.password) return res.send('Success');
// //     return res.send('Invalid');
// //   }
// }

const verifyCredentials = (request, response) => {
  Users.find({ user: request.body.user }).exec((err, doc) => {
    if (err) console.log('An error cooured while verifying');
    if (!doc) return response.send('Not found');
    if (doc.password === request.body.password) return response.send('Success');
    return response.send('Invalid');
  });
};

module.exports = verifyCredentials;
