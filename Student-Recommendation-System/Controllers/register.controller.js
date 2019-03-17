// Controller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';

exports.addUser = (request, response) => {
  const newUser = new Users({ user: request.body.username, password: request.body.password });
  newUser.save((err) => {
    if (err) return console.error(err);
    return response.send('Saved');
  });
};
