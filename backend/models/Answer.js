const mongoose = require('mongoose');
const validator = require('validator');

const answerSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Answer content is required'],
    trim: true,
    minlength: [5, 'Answer cannot less than 5 characters'],
    maxlength: [3000, 'Answer cannot exceed 3000 characters']
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Answer', answerSchema);
