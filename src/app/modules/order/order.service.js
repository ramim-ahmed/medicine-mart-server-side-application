const Order = require("./order.model");

const createNewOrder = async (data) => {
  const result = await Order.create(data);
  return result;
};

const getOrder = async (id) => {
  const result = await Order.findOne({ _id: id });
  return result;
};

module.exports.orderService = {
  createNewOrder,
  getOrder,
};
