const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  university: { type: String, required: true },
  level: { type: String, required:true },
  destination: { type: String },
  ieltsScore: { type: Number },
  location: { type: String },
  campusCity: { type: String },
  tuitionFees: { type: String },
  applicationFees: { type: String },
  duration: { type: String },
  intake: { type: String },
  worldRank: { type: String },
  internationalStudent: { type: String },
  courseDetailLink: { type: String },
  universityDetailLink: { type: String }
});

CourseSchema.index({ subject: 1, university: 1 ,level: 1}, { unique: true });

const Course = mongoose.models.Course || mongoose.model("Course", CourseSchema);

module.exports = Course;
