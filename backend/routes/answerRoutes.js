const express = require('express');
const answerController = require('../controllers/answerController');
const { protect } = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validate');
const answerValidation = require('../validations/answerValidation');

const router = express.Router();

router.post(
  '/:questionId/answers', 
  protect, 
  validate(answerValidation.createAnswer), 
  answerController.createAnswer
);
router.get('/:questionId/answers', protect, answerController.getAnswersByQuestion);

module.exports = router;
