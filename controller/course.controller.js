const { getAllCoursesService } = require("../services/course.service");


exports.getAllCourse = async (req, res, next) => {

    try {
        const request = await getAllCoursesService();

        if (request) {
            res.status(200).json({
                status: "Success",
                message: "Found all courses successfully",
                data: request,
            })
        }

    } catch (err) {
        console.log("requestsssssssssssssssssssss", err);
        next(err);
    }
};
