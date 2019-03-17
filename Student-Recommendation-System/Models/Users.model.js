import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  user: String,
  password: String,
  isVerified: { type: Boolean, default: false },
});
const Users = mongoose.model('Users', UsersSchema);

// Export the model
module.exports = Users;
