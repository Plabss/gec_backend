const UserDoc = require("../model/UserDoc.model");
const Course = require("../model/course.model");
const CustomError = require("../utils/customError");

exports.createCourseService = async (body) => {
  try {
    const course = new Course(body);
    await course.save();
    return course;
  } catch (error) {
    throw error;
  }
};
exports.getDocumentService = async (body) => {
  try {
    const documents = await UserDoc.find(body);
    if (documents) {
      return documents;
    }
  } catch (error) {
    throw error;
  }
};
