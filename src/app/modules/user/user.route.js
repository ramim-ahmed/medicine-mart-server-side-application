const express = require("express");
const { userController } = require("./user.controller");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/create-new", userController.createNewUser);
router.patch("/change-role/:email", userController.changeRole);

module.exports.userRoutes = router;
