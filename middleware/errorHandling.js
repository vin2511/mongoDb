const { constants } = require("../error_constants")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.validation_error:
            res.json({
                title: "validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.not_found:
            res.json({
                title: "not_found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.unauthorized:
            res.json({
                title: "unauthorized",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.forbidden:
            res.json({
                title: "forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.server_error:
            res.json({
                title: "validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        default:
            console.log("all is well")
            break;
    }
}
module.exports = errorHandler