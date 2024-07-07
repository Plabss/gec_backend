const {
  getAllCoursesService,
  getFilteredCourseService,
  getAllUniversitiesService,
  getFilteredUniversitiesService
} = require("../services/course.service");

exports.getAllCourse = async (req, res, next) => {
  try {
    const request = await getAllCoursesService();

    if (request) {
      res.status(200).json({
        status: "Success",
        message: "Found all courses successfully",
        data: request,
      });
    }
  } catch (err) {
    console.log("requestsssssssssssssssssssss", err);
    next(err);
  }
};
exports.getFilteredCourse = async (req, res, next) => {
  try {

    console.log(req.query)
    const { subject, level, destination, ieltsScore } = req.query;

    console.log(subject, level, destination, ieltsScore)
    let filter = {};

    if (subject) {
      filter.subject = { $regex: subject, $options: "i" };
    }
    if (level) {
      filter.level = level;
    }
    if (destination) {
      filter.destination = destination;
    }
    if (ieltsScore) {
      filter.ieltsScore = { $lte: parseFloat(ieltsScore) };
    }

    console.log(filter)
    const request = await getFilteredCourseService(filter);

    if (request) {
      res.status(200).json({
        status: "Success",
        message: "Found all courses successfully",
        data: request,
      });
    }
  } catch (err) {
    console.log("requestsssssssssssssssssssss", err);
    next(err);
  }
};

exports.getAllUniversities = async (req,res,next) => {
  try {
    const request = await getAllUniversitiesService();
    if(request){
      res.status(200).json({
        status: "Success",
        message: "Found all University successfully",
        data: request,
      });
    }
  } catch (error) {
    next(error)
  }
}
exports.getFilteredUniversities = async (req,res,next) => {
  try {

    const { university, destination } = req.query;
    let query = {};
    if (university) query.university = new RegExp(university, 'i');
    if (destination) query.destination = destination;

    const request = await getFilteredUniversitiesService(query);
    if(request){
      res.status(200).json({
        status: "Success",
        message: "Found filtered University successfully",
        data: request,
      });
    }
  } catch (error) {
    next(error)
  }
}
