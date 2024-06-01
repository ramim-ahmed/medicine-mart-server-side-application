const Medicine = require("./medicine.model");

const createNewMedicine = async (data) => {
  const result = await Medicine.create(data);
  return result;
};

const getAllMedicines = async () => {
  const result = await Medicine.find({}).sort({ createdAt: "desc" });
  return result;
};

const getSingleMedicine = async (id) => {
  const result = await Medicine.findOne({ _id: id });
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

module.exports = {
  createNewMedicine,
  getAllMedicines,
  getSingleMedicine,
  updateMedicine,
  deleteMedicine,
};
