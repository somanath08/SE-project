import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema(
  {
    user: String,
    password: String,
    isPermeanent: { type: Boolean, default: false },
  },
  { _id: false },
);
const Users = mongoose.model('Users', UsersSchema);

// Export the model
module.exports = Users;
