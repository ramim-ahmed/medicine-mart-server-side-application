const Advertisement = require("./advertisement.model");

const createNew = async (data) => {
  const result = await Advertisement.create(data);
  return result;
};

const getAllAdvertisement = async () => {
  const result = await Advertisement.find({}).sort({ createdAt: "desc" });
  return result;
};

const getMyAdvertisement = async (email) => {
  const result = await Advertisement.find({ "seller.email": email }).sort({
    createdAt: "desc",
  });
  return result;
};

module.exports.advertisementService = {
  createNew,
  getAllAdvertisement,
  getMyAdvertisement,
};
