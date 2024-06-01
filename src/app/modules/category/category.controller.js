const httpStatus = require("http-status");
const { categoryService } = require("./category.service");

const createNewCategory = async (req, res) => {
  try {
    const data = req.body;
    const result = await categoryService.createNewCategory(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Category Created Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Category Created Failed!!",
      error,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const result = await categoryService.getAllCategories();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Category All Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Category All Fetch Failed!!",
      error,
    });
  }
};

module.exports.categoryController = {
  createNewCategory,
  getAllCategories,
};
