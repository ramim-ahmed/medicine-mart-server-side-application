const express = require("express");
const { cartController } = require("./cart.controller");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.get("/my-cart/:email", verifyToken, cartController.getMyCartsProducts);
router.post("/create-new", verifyToken, cartController.addToCart);
router.patch(
  "/increment/:productId",
  verifyToken,
  cartController.incrementQuanity
);
router.patch(
  "/decrement/:productId",
  verifyToken,
  cartController.decrementQuanity
);

router.delete("/clear-my-cart", cartController.clearCart);

router.delete(
  "/cart-item/:productId",
  verifyToken,
  cartController.deleteCartItem
);
module.exports.cartRoutes = router;
