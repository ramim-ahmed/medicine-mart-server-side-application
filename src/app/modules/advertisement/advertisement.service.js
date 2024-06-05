const Advertisement = require("./advertisement.model");

const createNew = async (data) => {
  const result = await Advertisement.create(data);
  return result;
};

const getAllAdvertisement = async () => {
  const result = await Advertisement.find({})
    .populate("company")
    .sort({ createdAt: "desc" });
  return result;
};

const getMyAdvertisement = async (email) => {
  const result = await Advertisement.find({ "seller.email": email })
    .populate("company")
    .sort({
      createdAt: "desc",
    });
  return result;
};

const getAprovedAdvertise = async () => {
  const result = await Advertisement.find({ status: true })
    .populate("company")
    .sort({ createdAt: "desc" });
  return result;
};

const changeAdvetisementStatus = async (id, status) => {
  const result = await Advertisement.updateOne({ _id: id }, { status: status });
  return result;
};

module.exports.advertisementService = {
  createNew,
  getAllAdvertisement,
  getMyAdvertisement,
  changeAdvetisementStatus,
  getAprovedAdvertise,
};
