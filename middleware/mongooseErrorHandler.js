const mongooseErrorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: err.message, errors: err.errors });
    }
    if (err.code && err.code === 11000) {
        return res.status(409).json({ message: 'Duplicate key error', error: err });
    }
    next(err);
};

module.exports = mongooseErrorHandler;
