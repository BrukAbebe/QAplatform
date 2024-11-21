const httpStatus = require('http-status');

const notFoundHandler = (req, res, next) => {
  res.status(404).json({ 
    success: false, 
    message: 'Resource not found'
  });
};

module.exports = notFoundHandler;
