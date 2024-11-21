const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");

const protect = catchAsync(async (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith("Bearer")) {
    token = token.split(" ")[1];
  }
  if (!token) {
    return next(
      new ApiError(httpStatus.UNAUTHORIZED, "Access denied. No token provided.")
    );
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  if (!req.user)
    return next(new ApiError(httpStatus.UNAUTHORIZED, "User not found"));
  next();
});

module.exports = {
  protect,
};
