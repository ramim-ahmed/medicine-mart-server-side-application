const Company = require("./company.model");

const createNewCompany = async (data) => {
  const result = await Company.create(data);
  return result;
};

const getAllCompanies = async () => {
  const result = await Company.find({}).sort({ createdAt: "desc" });
  return result;
};

module.exports.companyService = {
  createNewCompany,
  getAllCompanies,
};
