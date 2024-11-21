const express = require("express");
const questionController = require("../controllers/questionController");
const { protect } = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validate");
const questionValidation = require("../validations/questionValidation");

const router = express.Router();

router.post(
  "/question",
  protect,
  validate(questionValidation.createQuestion),
  questionController.createQuestion
);
router.get("/:questionId", protect, questionController.getQuestionById);
router.get("/", questionController.getQuestions);

module.exports = router;
