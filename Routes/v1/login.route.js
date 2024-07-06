const express = require("express");
const router = express.Router();
const {
  logInController
} = require("../../controller/login.controller");

router.route("/").post(logInController);

module.exports = router;
