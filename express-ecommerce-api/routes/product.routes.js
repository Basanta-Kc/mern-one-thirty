const express = require("express");
const {
  getProductById,
  getProducts,
  deleteProductById,
  updateProductById,
  addProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/", getProducts);
router.post("/", addProduct);
router.get("/:productId", getProductById);
router.delete("/:productId", deleteProductById);
router.patch("/:productId", updateProductById);

module.exports = router;
