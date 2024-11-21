const Question = require('../models/Question');

const createQuestion = async (questionData, userId) => {
  return Question.create({ ...questionData, user: userId });
};

const getQuestions = async () => {
  return Question.find().populate('user', 'username').sort({ createdAt: -1 });
};

const getQuestionById = async (questionId) => {
  return Question.findById(questionId).populate('user', 'username');
};

module.exports = {
  createQuestion,
  getQuestions,
  getQuestionById,
};