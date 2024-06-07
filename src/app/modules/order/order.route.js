const express = require("express");
const { orderController } = require("./order.controller");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.get("/:id", verifyToken, orderController.getOrder);
router.post("/create-new", verifyToken, orderController.createNewOrder);

module.exports.orderRoutes = router;
