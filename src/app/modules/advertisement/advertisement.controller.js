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

const changeAdvetisementStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await advertisementService.changeAdvetisementStatus(
      id,
      status
    );
    res.status(httpStatus.OK).json({
      success: true,
      message: "Advertisements Status Change Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Advertisements Status Change Failed!!",
      error,
    });
  }
};

const getAprovedAdvertise = async (req, res) => {
  try {
    const result = await advertisementService.getAprovedAdvertise();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch Advertisements Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Fetch Advertisements Failed!!",
      error,
    });
  }
};
module.exports.advertisementController = {
  createNew,
  getAllAdvertisement,
  getMyAdvertisement,
  changeAdvetisementStatus,
  getAprovedAdvertise,
};
