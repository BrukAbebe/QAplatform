const Joi = require('joi');

const answerValidation = {
  createAnswer: Joi.object({
    content: Joi.string().min(5).max(3000).required(),
  })
};

module.exports = answerValidation;
