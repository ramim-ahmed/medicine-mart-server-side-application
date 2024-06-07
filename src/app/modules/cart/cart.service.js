const Cart = require("./cart.model");

const addToCart = async (data) => {
  const { email, productId } = data;
  const userCarts = await Cart.find({ email });
  if (userCarts.length > 0) {
    const isExits = userCarts.find((item) => item.productId === productId);
    if (isExits) {
      return;
    } else {
      const result = await Cart.create(data);
      return result;
    }
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

const incrementQuanity = async (data) => {
  const { productId, email } = data;
  const result = await Cart.updateOne(
    { $and: [{ productId: productId }, { email: email }] },
    { $inc: { quantity: 1 } }
  );
  return result;
};

const decrementQuanity = async (data) => {
  const { productId, email } = data;
  const findProduct = await Cart.findOne({
    $and: [{ productId: productId }, { email: email }],
  });
  if (findProduct.quantity > 1) {
    const result = await Cart.updateOne(
      { $and: [{ productId: productId }, { email: email }] },
      { $inc: { quantity: -1 } }
    );
    return result;
  } else {
    await Cart.deleteOne({
      $and: [{ productId: productId }, { email: email }],
    });
  }
};

const clearCart = async (data) => {
  const { email, ids } = data;
  const result = await Cart.deleteMany({
    $and: [{ email: email }, { productId: { $in: ids } }],
  });
  return result;
};

const deleteCartItem = async (data) => {
  const { productId, email } = data;
  const result = await Cart.deleteOne({
    $and: [{ productId: productId }, { email: email }],
  });
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
