const Joi = require('joi');

const questionValidation = {
  createQuestion: Joi.object({
    title: Joi.string().min(10).max(200).required(),
    description: Joi.string().min(5).max(5000).required(),
  })
};

module.exports = questionValidation;
