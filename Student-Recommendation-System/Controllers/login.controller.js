// Controller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';

exports.verifyCredentials = (request, response) => {
  console.log(`${JSON.stringify(request.body, null, 4)}`);
  Users.findOne({ user: request.body.user }).exec((err, doc) => {
    if (err) console.log('An error cooured while verifying');
    if (doc === []) return response.send('Not found');
    if (doc) {
      console.log(`here1 ${doc}`);
      if (doc.password === request.body.password) {
        if (doc.hasDetails) return response.send('Success');
        if (doc.isVerified) return response.send('acad');
        return response.send('Unverified');
      }
      return response.send('Bad Credentials');
    }
    return response.send('Invalid');
  });
};
