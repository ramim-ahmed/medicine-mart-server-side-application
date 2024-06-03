const express = require("express");
const { advertisementController } = require("./advertisement.controller");
const router = express.Router();

router.get("/", advertisementController.getAllAdvertisement);
router.get(
  "/my-advertisement/:email",
  advertisementController.getMyAdvertisement
);
router.post("/create-new", advertisementController.createNew);

module.exports.advertisementRoutes = router;
