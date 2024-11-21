const httpStatus = require("http-status");
const authService = require("../services/authService");
const catchAsync = require("../utils/catchAsync");

const signup = catchAsync(async (req, res) => {
  const { body } = req;
  const { user, token } = await authService.signup(body);
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: { id: user._id, username: user.username },
    token,
  });
});

const login = catchAsync(async (req, res) => {
  const { body } = req;
  const { user, token } = await authService.login(body);
  res.status(200).json({
    success: true,
    message: "Login successful",
    user: { id: user._id, username: user.username, firstName: user.firstName },
    token,
  });
});

module.exports = {
  signup,
  login,
};
