const httpStatus = require("http-status");

const globalErrorHandler = (req, res, err) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || "Something went wrong",
    error: err,
  });
};

module.exports = globalErrorHandler;
