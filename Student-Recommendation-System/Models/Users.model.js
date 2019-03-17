import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  user: { unique: true, type: String },
  password: String,
  firstName: String,
  lastName: String,
  Mobile: String,
  email: { type: String, unique: true },
  isVerified: { type: Boolean, default: false },
});
const Users = mongoose.model('Users', UsersSchema, 'Users');

// Export the model
module.exports = Users;
