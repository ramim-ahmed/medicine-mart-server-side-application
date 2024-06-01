const httpStatus = require("http-status");

const globalErrorHandler = (err, req, res) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || "Something went wrong",
    error: err,
  });
};

module.exports = globalErrorHandler;
