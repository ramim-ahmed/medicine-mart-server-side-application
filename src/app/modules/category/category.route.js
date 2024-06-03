const express = require("express");
const { categoryController } = require("./category.controller");
const verifyToken = require("../../middlewares/verifyToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const router = express.Router();

router.get("/", categoryController.getAllCategories);
router.post(
  "/create-new",
  verifyToken,
  verifyAdmin,
  categoryController.createNewCategory
);

router.patch(
  "/:id",
  verifyToken,
  verifyAdmin,
  categoryController.updateCategory
);
router.delete(
  "/:id",
  verifyToken,
  verifyAdmin,
  categoryController.deleteCategory
);

module.exports.categoryRoutes = router;
