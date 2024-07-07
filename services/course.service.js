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
exports.getFilteredCourseService = async (filter) => {
    try {
        const filteredCourse = await Course.find(filter);
        if (filteredCourse) {
            return filteredCourse;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

}
exports.getFilteredUniversitiesService = async (filter) => {
    try {

        console.log(filter)
        const filteredUniversity = await Course.find(filter);
        if (filteredUniversity) {
            return filteredUniversity;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

}
exports.getAllUniversitiesService = async () => {
    try {
        const filteredUniversity = await Course.distinct('university');
        if (filteredUniversity) {
            return filteredUniversity;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }

}
