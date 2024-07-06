const express = require("express");
const { addToCartController, getCartController,uploadDocumentsController } = require("../../controller/user.controller");
const multer = require("multer");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });


router.route("/add-course-to-cart/:user_id/:course_id").post(addToCartController);
router.route("/get-cart/:user_id").get(getCartController);
router.post("/upload-documents/:user_id",upload.fields([
    { name: 'doc1', maxCount: 1 },
    { name: 'doc2', maxCount: 1 },
    { name: 'doc3', maxCount: 1 },
]),uploadDocumentsController);

module.exports = router;
