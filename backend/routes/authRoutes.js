const express = require("express");
const authController = require("../controllers/authController");
const validate = require("../middlewares/validate");
const authValidation = require("../validations/authValidation");

const router = express.Router();

router.post(
  "/signup",
  validate(authValidation.register),
  authController.signup
);
router.post("/login", validate(authValidation.login), authController.login);

module.exports = router;
