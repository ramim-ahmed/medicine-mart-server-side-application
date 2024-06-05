const express = require("express");
const { orderController } = require("./order.controller");
const router = express.Router();

router.post("/create-new", orderController.createNewOrder);

module.exports.orderRoutes = router;
