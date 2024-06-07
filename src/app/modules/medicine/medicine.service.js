const Medicine = require("./medicine.model");

const createNewMedicine = async (data) => {
  const result = await Medicine.create(data);
  return result;
};

const getAllMedicines = async () => {
  const result = await Medicine.find({})
    .populate("category")
    .populate("company")
    .sort({ createdAt: "desc" });
  return result;
};

const getAllMedicineForHome = async () => {
  const result = await Medicine.find({ discountPercentage: 0 })
    .populate("category")
    .populate("company")
    .sort({ createdAt: "desc" })
    .limit(8);
  return result;
};

const getDiscountableProducts = async () => {
  const result = await Medicine.find({ discountPercentage: { $gt: 0 } })
    .populate("category")
    .populate("company")
    .sort({ createdAt: "desc" })
    .limit(8);
  return result;
};

const getCategoriesWiseMedicine = async (id) => {
  const result = await Medicine.find({ category: id })
    .populate("company")
    .populate("category")
    .sort({ createdAt: "desc" });
  return result;
};

const myMedicinesList = async (email) => {
  const result = await Medicine.find({ "seller.email": email })
    .populate("category")
    .populate("company")
    .sort({ createdAt: "desc" });
  return result;
};

const getSingleMedicine = async (id) => {
  const result = await Medicine.findOne({ _id: id })
    .populate("category")
    .populate("company");
  return result;
};

const updateMedicine = async (id, data) => {
  const result = await Medicine.updateOne({ _id: id }, data);
  return result;
};

const deleteMedicine = async (id) => {
  const result = await Medicine.deleteOne({ _id: id });
  return result;
};

module.exports.medicineService = {
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
