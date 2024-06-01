const express = require("express");
const { companyController } = require("./company.controller");
const router = express.Router();

router.get("/", companyController.getAllCompanies);
router.post("/create-new", companyController.createNewCompany);

module.exports.companyRoutes = router;
