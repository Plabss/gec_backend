
const express = require("express");
const router = express.Router();
const {
    adminCreateCourseController,getDocumentsController
} = require("../../controller/admin.controller");

router.route("/create-course").post(adminCreateCourseController);
router.route("/get-documents/:user_id").get(getDocumentsController);

module.exports = router;