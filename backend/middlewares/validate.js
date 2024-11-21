const { ValidationError } = require('joi');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const message = error.details.map((detail) => detail.message).join(', ');
    return next(new ApiError(httpStatus.BAD_REQUEST, message));
  }
  next();
};

module.exports = validate;
