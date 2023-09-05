const createError = require('http-errors');

module.exports.Response = {

    success: (res, body = {}, message = "OK", status = 200) => {
        res.status(status).json({ message, body });
    },
    error: (res, error = null) => {
        const { statusCode, message } = error ? error : new createError.InternalServerError();
        res.status(statusCode).json({ message });
    },
}