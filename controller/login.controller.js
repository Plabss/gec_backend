const
    { logInServices }
        = require("../../server/services/login.service");

exports.logInController = async (req, res, next) => {
    const body = req.body;
    try {
        const request = await logInServices(body);
        
        if (request) {
            res.status(200).json({
                status: "Success",
                message: "LogIn successfully",
                data: request,
            })
        }

    } catch (err) {
        next(err);
    }
};
