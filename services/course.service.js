const Course = require("../model/course.model");

exports.getAllCoursesService = async () => {
    try {
        const allCourse = await Course.find({});
        if (allCourse) {
            return allCourse;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

}
