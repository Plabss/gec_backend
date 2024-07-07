const express = require("express");
const { getAllCourse, getFilteredCourse,getAllUniversities,getFilteredUniversities } = require("../../controller/course.controller");
const router = express.Router();

router.route("/get-all-course").get(getAllCourse);
router.route("/get-filtered-course").get(getFilteredCourse);
router.route("/get-filtered-universities").get(getFilteredUniversities);
router.route("/get-all-universities").get(getAllUniversities);


module.exports = router;
