const httpStatus = require('http-status');
const questionService = require('../services/questionService');
const catchAsync = require('../utils/catchAsync');
const mongoose = require('mongoose');

const createQuestion = catchAsync(async (req, res) => {
  const { body } = req;
  const { user } = req;
  const question = await questionService.createQuestion(body, user._id);
  res.status(201).json({ question });
});

const getQuestions = catchAsync(async (req, res) => {
  const questions = await questionService.getQuestions();
  res.status(200).json({ questions });
});

const getQuestionById = catchAsync(async (req, res) => {
  const { questionId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(questionId)) {
    return res.status(400).json({ message: "Invalid question ID format." });
  }

  const question = await questionService.getQuestionById(questionId);

  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }

  res.status(200).json({ success: true, data: question });
});

module.exports = {
  createQuestion,
  getQuestions,
  getQuestionById,
};