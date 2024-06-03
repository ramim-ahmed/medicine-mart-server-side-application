const Category = require("./category.model");

const createNewCategory = async (data) => {
  const result = await Category.create(data);
  return result;
};

const getAllCategories = async () => {
  const result = await Category.find({}).sort({ createdAt: "desc" });
  return result;
};

const updateCategory = async (id, data) => {
  const result = await Category.updateOne({ _id: id }, data);
  return result;
};

const deleteCategory = async (id) => {
  const result = await Category.deleteOne({ _id: id });
  return result;
};

module.exports.categoryService = {
  createNewCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
