const express = require("express");
const { cartController } = require("./cart.controller");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.get("/my-cart/:email", cartController.getMyCartsProducts);
router.post("/create-new", verifyToken, cartController.addToCart);
router.patch("/increment", verifyToken, cartController.incrementQuanity);
router.patch("/decrement", verifyToken, cartController.decrementQuanity);
router.delete("/clear-cart", verifyToken, cartController.clearCart);
router.delete("/:productId/:email", verifyToken, cartController.deleteCartItem);
module.exports.cartRoutes = router;
