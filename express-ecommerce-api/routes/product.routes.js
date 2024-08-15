const express = require("express");
const {
  getProductById,
  getProducts,
  deleteProductById,
  updateProductById,
  addProduct,
} = require("../controllers/product.controller");
const router = express.Router();

const checkAuth = (req, res, next) => {
  if (req.headers.token !== "1234567") {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  next();
};
router.get("/", checkAuth, getProducts);
router.post("/", checkAuth,addProduct);
router.get("/:productId",checkAuth, getProductById);
router.delete("/:productId", deleteProductById);
router.patch("/:productId", updateProductById);

module.exports = router;
