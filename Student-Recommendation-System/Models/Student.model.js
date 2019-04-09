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
  pc: Number,
  dc: Number,
  cn: Number,
  cg: Number,
  nn: Number,
  ip: Number,
  sem: Number,
  courses: { type: [], default: null },
});
const Students = mongoose.model('Student', StudentSchema, 'Students');

// Export the model
module.exports = Students;
