const UserDoc = require("../model/UserDoc.model");
const { addToCartServices, getCartServices,uploadDocumentServices } = require("../services/user.service");

exports.addToCartController = async (req, res, next) => {
    try {
        const request = await addToCartServices(req.params);

        if (request) {
            res.status(200).json({
                status: "Success",
                message: "Cart modified successfully",
                data: request,
            })
        }

    } catch (err) {
        next(err);
    }
};
exports.getCartController = async (req, res, next) => {
    try {
        const request = await getCartServices(req.params);

        if (request) {
            res.status(200).json({
                status: "Success",
                message: "Get the cart successfully",
                data: request,
            })
        }

    } catch (err) {
        next(err);
    }
};
exports.uploadDocumentsController = async (req, res, next) => {
    try {
        const userDoc = await UserDoc.findOne({ user_id: req.params.user_id });

        const filesToUpload = {};
        if (req.files.doc1 && (!userDoc || !userDoc.doc1)) {
            filesToUpload.doc1 = req.files.doc1;
        }
        if (req.files.doc2 && (!userDoc || !userDoc.doc2)) {
            filesToUpload.doc2 = req.files.doc2;
        }
        if (req.files.doc3 && (!userDoc || !userDoc.doc3)) {
            filesToUpload.doc3 = req.files.doc3;
        }

        if (Object.keys(filesToUpload).length === 0) {
            return res.status(400).json({
                status: "Failed",
                message: `All selected documents have already been uploaded for user ${req.params.user_id}`,
            });
        }

        const request = await uploadDocumentServices(filesToUpload, req.params.user_id);

        if (request) {
            res.status(200).json({
                status: "Success",
                message: `Upload documents of student ${req.params.user_id} successfully!`,
                data: request,
            });
        }

    } catch (err) {
        next(err);
    }
};
