const httpStatus = require("http-status");
const { orderService } = require("./order.service");

const createNewOrder = async (req, res) => {
  try {
    const data = req.body;
    const result = await orderService.createNewOrder(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Orders Placed Successfullly!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Orders Placed Failed!!",
      error,
    });
  }
};

module.exports.orderController = {
  createNewOrder,
};
