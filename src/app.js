require("dotenv").config();
const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const { applicationRoutes } = require("./app/routes");
const notFoundApiHandler = require("./app/middlewares/notFoundApiHandler");
const globalErrorHandler = require("./app/middlewares/globalErrorHandler");

// backend application
const app = express();

// middlware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    message: "Welcome to Medicine Mart Server!!",
  });
});

app.use("/api/v1", applicationRoutes);

// not found route handler
app.use(notFoundApiHandler);

// global error handler
app.use(globalErrorHandler);

module.exports = app;
