const httpStatus = require("http-status");
const { medicineService } = require("./medicine.service");

const createNewMedicine = async (req, res) => {
  try {
    const data = req.body;
    const result = await medicineService.createNewMedicine(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Medicine Created Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Medicine Created Failed!!",
      error,
    });
  }
};

const getAllMedicines = async (req, res) => {
  try {
    const result = await medicineService.getAllMedicines();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Medicines All Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Medicines All Fetch Failed!!",
      error,
    });
  }
};

const getAllMedicineForHome = async (req, res) => {
  try {
    const result = await medicineService.getAllMedicineForHome();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Medicines Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Medicines Fetch Failed!!",
      error,
    });
  }
};

const getDiscountableProducts = async (req, res) => {
  try {
    const result = await medicineService.getDiscountableProducts();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch Discountable Products Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Fetch Discountable Products Failed!!",
      error,
    });
  }
};

const getCategoriesWiseMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await medicineService.getCategoriesWiseMedicine(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Categories Wise Medicine Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Categories Wise Medicine Fetch Failed!!",
      error,
    });
  }
};

const getSingleMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await medicineService.getSingleMedicine(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Medicine Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Medicine Fetch Failed!!",
      error,
    });
  }
};

const myMedicinesList = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await medicineService.myMedicinesList(email);
    res.status(httpStatus.OK).json({
      success: true,
      message: "My Medicine Lists Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "My Medicine List Fetch Failed!!",
      error,
    });
  }
};

const updateMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await medicineService.updateMedicine(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Medicine update Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Medicine update Failed!!",
      error,
    });
  }
};

const deleteMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await medicineService.deleteMedicine(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Medicine delete Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Medicine delete Failed!!",
      error,
    });
  }
};

module.exports.medicineController = {
  createNewMedicine,
  getAllMedicines,
  getSingleMedicine,
  updateMedicine,
  deleteMedicine,
  myMedicinesList,
  getCategoriesWiseMedicine,
  getAllMedicineForHome,
  getDiscountableProducts,
};
