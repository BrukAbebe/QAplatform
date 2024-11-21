const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const errorConverter = (err, req, res, next) => {
  if (!(err instanceof ApiError)) {
    const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message || "Internal Server Error";
    err = new ApiError(statusCode, message, false, err.stack);
  }
  next(err);
};

module.exports = errorConverter;
