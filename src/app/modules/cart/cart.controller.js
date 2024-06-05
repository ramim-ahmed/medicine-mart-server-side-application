const httpStatus = require("http-status");
const { cartService } = require("./cart.service");

const addToCart = async (req, res) => {
  try {
    const data = req.body;
    const result = await cartService.addToCart(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Product Add To Cart Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Product Add To Cart Failed!!",
      error,
    });
  }
};

const incrementQuanity = async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await cartService.incrementQuanity(productId);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Product Quantity Increment!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Product Quantity Increment Failed !!",
      error,
    });
  }
};

const decrementQuanity = async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await cartService.decrementQuanity(productId);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Product Quantity Decrement!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Product Quantity Decrement Failed!!",
      error,
    });
  }
};

const getMyCartsProducts = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await cartService.getMyCartsProducts(email);
    res.status(httpStatus.OK).json({
      success: true,
      message: "My Carts Products Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "My Carts Products Fetch Failed!!",
      error,
    });
  }
};

const clearCart = async (req, res) => {
  try {
    console.log("clear-cart-api", req.body);
    const result = await cartService.clearCart();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Clear My Cart!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Clear My Cart Failed!!",
      error,
    });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await cartService.clearCart(productId);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Item Deleted From Cart!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Item Deleted Failed From Cart !!",
      error,
    });
  }
};

module.exports.cartController = {
  addToCart,
  incrementQuanity,
  decrementQuanity,
  getMyCartsProducts,
  clearCart,
  deleteCartItem,
};
