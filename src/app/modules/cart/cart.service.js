const Cart = require("./cart.model");

const addToCart = async (data) => {
  const { productId } = data;
  const isExits = await Cart.findOne({ productId });
  if (isExits) {
    return;
  }
  const result = await Cart.create(data);
  return result;
};

const getMyCartsProducts = async (email) => {
  const result = await Cart.find({ email })
    .populate("company")
    .populate("category");
  return result;
};

const incrementQuanity = async (productId) => {
  const result = await Cart.updateOne({ productId }, { $inc: { quantity: 1 } });
  return result;
};
const decrementQuanity = async (productId) => {
  const findProduct = await Cart.findOne({ productId });
  const { quantity } = findProduct || {};
  if (quantity > 1) {
    const result = await Cart.updateOne(
      { productId },
      { $inc: { quantity: -1 } }
    );
    return result;
  }
  await Cart.deleteOne({ productId });
};

const clearCart = async (ids) => {
  const filter = { productId: { $in: ids } };
  const result = await Cart.deleteMany(filter);
  return result;
};

const deleteCartItem = async (productId) => {
  const result = await Cart.deleteOne({ productId });
  return result;
};

module.exports.cartService = {
  addToCart,
  getMyCartsProducts,
  incrementQuanity,
  decrementQuanity,
  clearCart,
  deleteCartItem,
};
