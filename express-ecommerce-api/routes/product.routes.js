const express = require("express");
const { body } = require("express-validator");
const {
  getProductById,
  getProducts,
  deleteProductById,
  updateProductById,
  addProduct,
} = require("../controllers/product.controller");
const {
  checkAuth,
  checkAuthAdmin,
} = require("../middleware/check-auth.middleware");
const validate = require("../middleware/validator.middleware");

const router = express.Router();

router.get("/", getProducts);
router.post(
  "/",
  checkAuth,
  body("name").notEmpty(),
  body("price").notEmpty(),
  validate,
  addProduct
);
router.get("/:productId", checkAuth, getProductById);
router.delete("/:productId", checkAuthAdmin, deleteProductById);
router.patch("/:productId", checkAuthAdmin, updateProductById);

module.exports = router;
