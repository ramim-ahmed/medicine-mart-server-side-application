const Order = require("./order.model");

const createNewOrder = async (data) => {
  const result = await Order.create(data);
  return result;
};

module.exports.orderService = {
  createNewOrder,
};
