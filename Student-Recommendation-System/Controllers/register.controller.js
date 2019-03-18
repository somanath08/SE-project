// Controller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';
import Tokens from '../Models/Tokens.model';

const nodemailer = require('nodemailer');

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
    const token = new Tokens({
      // eslint-disable-next-line no-underscore-dangle
      _userId: newUser._id,
      token: crypto.randomBytes(16).toString('hex'),
    });
    // eslint-disable-next-line consistent-return
    token.save((errToken) => {
      if (errToken) return console.error(errToken);
      const from = 'k.saisomanath@gmail.com';
      const message = `${'Hello,\n\n'
        + 'Please verify your account by clicking the link: \nhttp://'}${
        request.headers.host
      }/confirmation/${token.token}.\n`;
      const to = newUser.email;
      const smtpTransport = nodemailer.createTransport(
        `smtps://${process.env.USER}%40gmail.com:${encodeURIComponent(
          process.env.PASS,
        )}@smtp.gmail.com:465`,
      );

      const mailOptions = {
        from,
        to,
        subject: 'Verification Link',
        text: message,
      };
      smtpTransport.sendMail(mailOptions, (error, res) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Apparently a success${res}`);
        }
      });
    });
    return response.send('Saved');
  });
};
