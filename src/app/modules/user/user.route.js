const express = require("express");
const { userController } = require("./user.controller");
const verifyToken = require("../../middlewares/verifyToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const router = express.Router();

router.get("/", verifyToken, verifyAdmin, userController.getAllUsers);
router.get("/get-role/:email", verifyToken, userController.getUserRole);
router.post("/create-new", userController.createNewUser);
router.patch(
  "/change-role/:email",
  verifyToken,
  verifyAdmin,
  userController.changeRole
);

module.exports.userRoutes = router;
