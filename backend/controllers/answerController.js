const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const answerService = require("../services/answerService");
const questionService = require("../services/questionService");
const mongoose = require("mongoose");

const createAnswer = catchAsync(async (req, res) => {
  const { body } = req;
  const { id: userId } = req.user;
  const { questionId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(questionId)) {
    return res.status(400).json({ error: "Invalid question ID format." });
  }

  const answer = await answerService.createAnswer(body, userId, questionId);
  res.status(201).json({ success: true, data: answer });
});

const getAnswersByQuestion = catchAsync(async (req, res) => {
  const { questionId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(questionId)) {
    return res.status(400).json({ error: "Invalid question ID format." });
  }

  const questionExists = await questionService.getQuestionById(questionId);
  if (!questionExists) {
    return res.status(404).json({ error: "Question not found." });
  }

  const answers = await answerService.getAnswersByQuestion(questionId);
  res.status(200).json({ success: true, data: answers });
});

module.exports = {
  createAnswer,
  getAnswersByQuestion,
};
