import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  user: String,
  stream: String,
  uniStream: String,
  algo: Boolean,
  os: Boolean,
  database: Boolean,
  networks: Boolean,
  programming: Boolean,
  data: Boolean,
  ml: Boolean,
  grade: Number,
  aalgo: Boolean,
  aos: Boolean,
  cn: Boolean,
  dc: Boolean,
});
const Students = mongoose.model('Student', StudentSchema, 'Students');

// Export the model
module.exports = Students;
