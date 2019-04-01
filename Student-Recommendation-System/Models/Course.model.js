import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  courseType: String,
  courseName: String,
  credits: String,
  prerequisites: [String],
});
const Courses = mongoose.model('Course', CourseSchema, 'Courses');

// Export the model
module.exports = Courses;
