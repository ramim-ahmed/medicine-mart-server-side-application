/* eslint-disable no-undef */
const httpStatus = require("http-status");
const { paymentService } = require("./payment.service");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.status(httpStatus.OK).json({
    clientSecret: paymentIntent.client_secret,
  });
};

const createNePayment = async (req, res) => {
  try {
    const data = req.body;
    const result = await paymentService.createNewPayment(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Payment Success!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.OK).json({
      success: true,
      message: "Payment Failed!!",
      error,
    });
  }
};

const getMyPayments = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await paymentService.getMyPayments(email);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch My Payments Success!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch My Payments Failed!!",
      error,
    });
  }
};

const getAllPaymentsList = async (req, res) => {
  try {
    const result = await paymentService.getAllPaymentsList();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch All Payments List Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch All Payments List Failed!!",
      error,
    });
  }
};

const udpatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await paymentService.udpatePaymentStatus(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Payment Status Updated Success!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.OK).json({
      success: true,
      message: "Payment Status Updated Failed!!",
      error,
    });
  }
};

const getTotalSalesRevenue = async (req, res) => {
  try {
    const result = await paymentService.getTotalSalesRevenue();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch All Sales Revenue Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch All Sales Revenue Successfully!!",
      error,
    });
  }
};

module.exports.paymentController = {
  createPaymentIntent,
  createNePayment,
  getMyPayments,
  getAllPaymentsList,
  udpatePaymentStatus,
  getTotalSalesRevenue,
};
