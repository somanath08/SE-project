import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  facId: String,
  courseType: String,
  courseName: String,
  courseId: String,
  credits: String,
  prerequisites: String,
  registered: { type: [String], default: null },
  avgGrade: Number,
  semester: Number,
});
const Courses = mongoose.model('Course', CourseSchema, 'Courses');

// Export the model
module.exports = Courses;
