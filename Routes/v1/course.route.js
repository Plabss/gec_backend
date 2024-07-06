const express = require("express");
const { getAllCourse } = require("../../controller/course.controller");
const router = express.Router();

router.route("/get-all-course").get(getAllCourse);


module.exports = router;
