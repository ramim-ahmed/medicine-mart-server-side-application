const httpStatus = require("http-status");
const { advertisementService } = require("./advertisement.service");

const createNew = async (req, res) => {
  try {
    const data = req.body;
    const result = await advertisementService.createNew(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Advertisement Added Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Advertisement Added Failed!!",
      error,
    });
  }
};

const getAllAdvertisement = async (req, res) => {
  try {
    const result = await advertisementService.getAllAdvertisement();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Advertisement Fetch All Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Advertisement Fetch All Failed!!",
      error,
    });
  }
};

const getMyAdvertisement = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await advertisementService.getMyAdvertisement(email);
    res.status(httpStatus.OK).json({
      success: true,
      message: "My Advertisements Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "My Advertisements Fetch Failed!!",
      error,
    });
  }
};

module.exports.advertisementController = {
  createNew,
  getAllAdvertisement,
  getMyAdvertisement,
};
