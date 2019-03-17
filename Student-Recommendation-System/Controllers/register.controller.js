// Controller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';

exports.addUser = (request, response) => {
  const newUser = new Users({
    user: request.body.user,
    password: request.body.password,
    email: request.body.email,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    mobile: request.body.mobile,
  });
  newUser.save((err) => {
    if (err) return console.error(err);
    return response.send('Saved');
  });
};
