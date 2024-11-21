const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(err.stack);
    }
    next(err); 
  });
};

module.exports = catchAsync;
