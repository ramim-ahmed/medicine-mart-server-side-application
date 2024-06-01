const Category = require("./category.model");

const createNewCategory = async (data) => {
  const result = await Category.create(data);
  return result;
};

const getAllCategories = async () => {
  const result = await Category.find({}).sort({ createdAt: "desc" });
  return result;
};

module.exports.categoryService = {
  createNewCategory,
  getAllCategories,
};
