import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  user: String,
  password: String,
  firstName: String,
  lastName: String,
  Mobile: String,
  email: String,
  isVerified: { type: Boolean, default: false },
  hasDetails: { type: Boolean, default: false },
});
const Users = mongoose.model('Users', UsersSchema, 'Users');

// Export the model
module.exports = Users;
