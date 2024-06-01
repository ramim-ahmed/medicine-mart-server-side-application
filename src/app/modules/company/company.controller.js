const httpStatus = require("http-status");
const { companyService } = require("./company.service");

const createNewCompany = async (req, res) => {
  try {
    const data = req.body;
    const result = await companyService.createNewCompany(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Company Created Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Company Created Failed!!",
      error,
    });
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const result = await companyService.getAllCompanies();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Company All Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Company All Fetch Failed!!",
      error,
    });
  }
};

module.exports.companyController = {
  createNewCompany,
  getAllCompanies,
};
