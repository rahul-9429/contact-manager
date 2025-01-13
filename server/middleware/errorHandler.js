const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statuscode = res.statusCode ? res.statusCode : 500;

    switch (statuscode) {
        case constants.VALIDATION_ERROR:
            return res.json({
                title: "VALIDATION_ERROR",
                message: err.message,
                stackTrace: err.stack,
            });
        case constants.UNAUTHORIZED:
            return res.json({
                title: "UNAUTHORIZED",
                message: err.message,
                stackTrace: err.stack,
            });
        case constants.FORBIDDEN:
            return res.json({
                title: "FORBIDDEN",
                message: err.message,
                stackTrace: err.stack,
            });
        case constants.NOT_FOUND:
            return res.json({
                title: "NOT_FOUND",
                message: err.message,
                stackTrace: err.stack,
            });
        case constants.SERVER_ERROR:
            return res.json({
                title: "SERVER_ERROR",
                message: err.message,
                stackTrace: err.stack,
            });
        default:
            console.log("All good, no error");
            break;
    }
};

module.exports = errorHandler;
