import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema(
  {
    user: String,
    percentageTen: Number,
    percentagePUC: Number,
    percentageUni: Number,
    StreamPUC: String,
    StreamUni: String,
  },
  { _id: false },
);
const Student = mongoose.model('Users', StudentSchema);

// Export the model
module.exports = Student;
