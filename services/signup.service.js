const User = require('../model/user.model');
const CustomError = require('../utils/customError');

exports.createSignUpStudentService = async (body) => {
    try {
        const isExist = await User.findOne({ email: body.email });
        if (isExist) {
            throw new CustomError('User already exists', 422);
        }
        const requestedInfo = await User.create(body);
        return requestedInfo;
    } catch (error) {
        throw error; 
    }
};
