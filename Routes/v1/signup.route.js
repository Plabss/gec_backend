const express = require("express");
const router = express.Router();
const {
  signUpController
} = require("../../controller/signup.controller");

router.route("/").post(signUpController);

module.exports = router;
