const express = require("express");
const { medicineController } = require("./medicine.controller");
const verifyToken = require("../../middlewares/verifyToken");
const verifySeller = require("../../middlewares/verifySeller");
const router = express.Router();

router.get("/", medicineController.getAllMedicines);
router.get("/medicines-for-home", medicineController.getAllMedicineForHome);
router.get(
  "/discountable-products",
  medicineController.getDiscountableProducts
);
router.get("/:id", medicineController.getSingleMedicine);
router.get("/categories/:id", medicineController.getCategoriesWiseMedicine);
router.get(
  "/my-medicine-lists/:email",
  verifyToken,
  verifySeller,
  medicineController.myMedicinesList
);
router.post(
  "/create-new",
  verifyToken,
  verifySeller,
  medicineController.createNewMedicine
);
router.patch(
  "/:id",
  verifyToken,
  verifySeller,
  medicineController.updateMedicine
);
router.delete(
  "/:id",
  verifyToken,
  verifySeller,
  medicineController.deleteMedicine
);

module.exports.medicineRoutes = router;
