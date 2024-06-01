const express = require("express");
const { medicineController } = require("./medicine.controller");
const router = express.Router();

router.get("/", medicineController.getAllMedicines);
router.get("/:id", medicineController.getSingleMedicine);
router.get("/my-medicine-lists/:email", medicineController.myMedicinesList);
router.post("/create-new", medicineController.createNewMedicine);
router.patch("/:id", medicineController.updateMedicine);
router.delete("/:id", medicineController.deleteMedicine);

module.exports.medicineRoutes = router;
