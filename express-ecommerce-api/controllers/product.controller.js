const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong.",
    });
  }
};

const addProduct = async (req, res) => {
  if (req.headers.token !== "1234567") {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  await Product.create(req.body);
  res.status(201).json({
    message: "Product added successfully.",
  });
};

const getProductById = async (req, res) => {
  if (req.headers.token !== "1234567") {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const product = await Product.findById(req.params.productId);
  res
    .status(200)
    .json({ message: "Product fetched successfully", data: product });
};

const deleteProductById = async (req, res) => {
  await Product.deleteOne({ _id: req.params.productId });
  res.status(200).json({
    message: "Product deleted succesfully",
  });
};

const updateProductById = async (req, res) => {
  const id = req.params.productId;
  await Product.updateOne({ _id: id }, req.body);
  res.status(200).json({
    message: "Product updated succesfully.",
  });
};

module.exports = {
  getProductById,
  getProducts,
  deleteProductById,
  updateProductById,
  addProduct,
};
