const express = require("express");
const { advertisementController } = require("./advertisement.controller");
const verifyToken = require("../../middlewares/verifyToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifySeller = require("../../middlewares/verifySeller");
const router = express.Router();
router.get("/approved", advertisementController.getAprovedAdvertise);
router.get(
  "/",
  verifyToken,
  verifyAdmin,
  advertisementController.getAllAdvertisement
);
router.get(
  "/my-advertisement/:email",
  verifyToken,
  verifySeller,
  advertisementController.getMyAdvertisement
);

router.post(
  "/create-new",
  verifyToken,
  verifySeller,
  advertisementController.createNew
);
router.patch(
  "/change-status/:id",
  verifyToken,
  verifyAdmin,
  advertisementController.changeAdvetisementStatus
);

module.exports.advertisementRoutes = router;
