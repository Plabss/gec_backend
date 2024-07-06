const User = require("../model/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CustomError = require("../utils/customError");

exports.logInServices = async (body) => {
  const { email, password } = body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id, name: user.name , role: user.role}, process.env.JWT_SECRET);
      const res = {
        "token" : token
      }
      return res;
    }
    else if (!user) {
      throw new CustomError("Invalid Email", 401);
    } else {
      throw new CustomError("Invalid password", 401);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
