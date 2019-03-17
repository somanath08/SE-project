import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  user: String,
  percentageTen: Number,
  percentagePUC: Number,
  percentageUni: Number,
  StreamPUC: String,
  StreamUni: String,
});
const Students = mongoose.model('Student', StudentSchema);

// Export the model
module.exports = Students;
