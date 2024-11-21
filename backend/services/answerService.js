const Answer = require("../models/Answer");

const createAnswer = async (answerData, userId, questionId) => {
  return Answer.create({ ...answerData, user: userId, question: questionId });
};

const getAnswersByQuestion = async (questionId) => {
  return Answer.find({ question: questionId }).populate("user", "username");
};

module.exports = {
  createAnswer,
  getAnswersByQuestion,
};
