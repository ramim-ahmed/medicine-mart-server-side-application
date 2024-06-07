const Cart = require("../cart/cart.model");
const Payment = require("./payment.model");

const createNewPayment = async (data) => {
  const { productIds } = data;
  const ids = productIds.map((item) => item.productId);
  const result = await Payment.create(data);
  const filter = { productId: { $in: ids } };
  await Cart.deleteMany(filter);
  return result;
};

const getAllPaymentsList = async () => {
  const result = await Payment.find({}).sort({ createdAt: "desc" });
  return result;
};

const udpatePaymentStatus = async (id) => {
  const result = await Payment.updateOne({ _id: id }, { status: "PAID" });
  return result;
};

const getMyPayments = async (email) => {
  const result = await Payment.find({ "user.email": email }).sort({
    createAt: "desc",
  });
  return result;
};

const getTotalSalesRevenue = async () => {
  // Aggregation pipeline
  const pipeline = [
    {
      $facet: {
        pendingPaid: [
          {
            $match: {
              status: { $in: ["PENDING", "PAID"] },
            },
          },
          {
            $group: {
              _id: "$status",
              totalAmount: { $sum: "$price" },
            },
          },
          {
            $project: {
              _id: 0,
              status: "$_id",
              totalAmount: 1,
            },
          },
        ],
        totalAmount: [
          {
            $group: {
              _id: null,
              totalAmount: { $sum: "$price" },
            },
          },
          {
            $project: {
              _id: 0,
              status: { $literal: "TOTAL" },
              totalAmount: 1,
            },
          },
        ],
      },
    },
    {
      $project: {
        combinedResults: {
          $concatArrays: ["$pendingPaid", "$totalAmount"],
        },
      },
    },
    {
      $unwind: "$combinedResults",
    },
    {
      $replaceRoot: { newRoot: "$combinedResults" },
    },
    {
      $sort: { totalAmount: -1 }, // Sort by totalAmount in descending order
    },
  ];
  const result = await Payment.aggregate(pipeline);
  return result;
};
module.exports.paymentService = {
  createNewPayment,
  getMyPayments,
  getAllPaymentsList,
  udpatePaymentStatus,
  getTotalSalesRevenue,
};
