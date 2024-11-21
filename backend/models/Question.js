const mongoose = require('mongoose');
const validator = require('validator');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Question title is required'],
    trim: true,
    minlength: [10, 'Title cannot less than 10 characters'],
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Question description is required'],
    trim: true,
    minlength: [5, 'Title cannot less than 5 characters'],
    maxlength: [5000, 'Description cannot exceed 5000 characters']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
