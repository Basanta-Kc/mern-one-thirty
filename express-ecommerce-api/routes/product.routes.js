const express = require("express");
const {
  getProductById,
  getProducts,
  deleteProductById,
  updateProductById,
  addProduct,
} = require("../controllers/product.controller");
const { checkAuth } = require("../middleware/check-auth.middleware");

const router = express.Router();

router.get("/", checkAuth, getProducts);
router.post("/", checkAuth, addProduct);
router.get("/:productId", checkAuth, getProductById);
router.delete("/:productId", deleteProductById);
router.patch("/:productId", updateProductById);

module.exports = router;
