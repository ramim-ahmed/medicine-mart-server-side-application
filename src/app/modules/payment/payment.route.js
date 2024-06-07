const express = require("express");
const { paymentController } = require("./payment.controller");
const verifyToken = require("../../middlewares/verifyToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const router = express.Router();

router.get("/", verifyToken, verifyAdmin, paymentController.getAllPaymentsList);
router.get(
  "/total-sales-revenue",
  verifyToken,
  verifyAdmin,
  paymentController.getTotalSalesRevenue
);
router.get("/my-payments/:email", verifyToken, paymentController.getMyPayments);
router.post(
  "/create-payment-intent",
  verifyToken,
  paymentController.createPaymentIntent
);
router.post("/create-new", verifyToken, paymentController.createNePayment);
router.patch(
  "/update-payment-status/:id",
  verifyToken,
  verifyAdmin,
  paymentController.udpatePaymentStatus
);
module.exports.paymentRoutes = router;
