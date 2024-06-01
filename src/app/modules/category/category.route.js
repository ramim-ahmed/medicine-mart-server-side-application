const express = require("express");
const { categoryController } = require("./category.controller");
const router = express.Router();

router.get("/", categoryController.getAllCategories);
router.post("/create-new", categoryController.createNewCategory);

module.exports.categoryRoutes = router;
