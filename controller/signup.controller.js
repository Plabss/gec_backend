const { createSignUpStudentService } = require("../services/signup.service");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUpController = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const body = { ...req.body, password: hashedPassword };
        console.log('body:', body);
        const request = await createSignUpStudentService(body);
        res.status(201).json(request);
    } catch (error) {
        next(error);
    }
};
