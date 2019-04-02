// Controller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';
import Tokens from '../Models/Tokens.model';

require('dotenv').config();
const nodemailer = require('nodemailer');
const crypto = require('crypto');

exports.addUser = (request, response) => {
  const newUser = new Users({
    user: request.body.user,
    password: request.body.pass.password,
    email: request.body.email,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    mobile: request.body.mobile,
  });
  newUser.save((err) => {
    if (err) return console.error(err);
    const token = new Tokens({
      // eslint-disable-next-line no-underscore-dangle
      userId: newUser._id,
      token: crypto.randomBytes(16).toString('hex'),
    });
    // eslint-disable-next-line consistent-return
    token.save((errToken) => {
      if (errToken) return console.error(errToken);
      const from = `${process.env.USER}@gmail.com`;
      const message = `${'Hello,\n\n'
        + 'Please verify your account by clicking the link: \nhttp://'}${
        request.headers.host
      }/confirm/${token.token}.\n`;
      const to = newUser.email;
      console.log(`${process.env.FROM_EMAIL}\n${process.env.PASS}`);
      const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.FROM_EMAIL,
          pass: process.env.PASS,
        },
      });

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
