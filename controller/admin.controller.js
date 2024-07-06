const { createCourseService,getDocumentService } = require("../services/admin.service");

exports.adminCreateCourseController = async (req, res, next) => {
    try {
        const request = await createCourseService(req.body);
        res.status(201).json(request);
    } catch (error) {
        next(error);
    }
};
exports.getDocumentsController = async (req, res, next) => {
    try {
        const request = await getDocumentService(req.params);
        res.status(201).json(request);
    } catch (error) {
        next(error);
    }
};
