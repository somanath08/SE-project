/* eslint-disable no-console */
// Start point of the server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
// Routes
const loginRouter = require('./Routes/login.route');
const registerRouter = require('./Routes/register.route');
// Server
const app = express();
const distPath = path.join(__dirname, '/Views');
mongoose.Promise = global.Promise;
const db = mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/test', {
  useNewUrlParser: true,
}).connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connetion to DB up!');
  app.use(cors());
  app.use(express.static(distPath));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/login', loginRouter);
  app.use('./register', registerRouter);

  // app.get("/", (req, res) => {
  //   res.sendFile(distPath + "index.html");
  // });

  app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`);
  });
});
