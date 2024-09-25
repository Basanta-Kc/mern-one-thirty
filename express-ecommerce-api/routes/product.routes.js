const express = require("express");
const { body } = require("express-validator");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const fileExtension = file.mimetype.split("/")[1];
    cb(null, Date.now() + "." + fileExtension);
  },
});

const upload = multer({ storage: storage });

const {
  getProductById,
  getProducts,
  deleteProductById,
  updateProductById,
  addProduct,
  getFeaturedProducts,
  getLatestProducts,
  createOrder,
  getOrders,
} = require("../controllers/product.controller");
const {
  checkAuth,
  checkAuthAdmin,
} = require("../middleware/check-auth.middleware");

const router = express.Router();

router.get("/", getProducts);
router.get("/featured", getFeaturedProducts);
router.get("/latest", getLatestProducts);
router.post("/order", checkAuth, createOrder);
router.get("/order", checkAuth, getOrders);
router.post("/", checkAuth, upload.single("image"), addProduct);
router.get("/:productId", checkAuth, getProductById);
router.delete("/:productId", checkAuthAdmin, deleteProductById);
router.patch(
  "/:productId",
  checkAuthAdmin,
  upload.single("image"),
  updateProductById
);

module.exports = router;
