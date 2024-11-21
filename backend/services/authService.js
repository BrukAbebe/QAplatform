const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const User = require("../models/User");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = async ({ email, password, firstName, lastName, username }) => {
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "User with this email already exists"
    );
  }

  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Username is already taken");
  }

  const user = await User.create({
    email,
    password,
    firstName,
    lastName,
    username,
  });
  const token = generateToken(user._id);

  return { user, token };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid email or password");
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid email or password");
  }

  const token = generateToken(user._id);
  return { user, token };
};

module.exports = {
  signup,
  login,
};
