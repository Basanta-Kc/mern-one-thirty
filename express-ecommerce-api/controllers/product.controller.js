const Product = require("../models/Product");

const getProducts = async (req, res) => {
  // Home Work:
  // ?name=shoes
  // ?priceOrder=asc | desc
  // ?name=shoes&priceOrder=asc
  // search by name, price anusar sorting (asc descending)
  const products = await Product.find();
  res.status(200).json({
    message: "Products fetched successfully",
    data: products,
  });
};

const addProduct = async (req, res) => {
  await Product.create({
    name: req.body.name,
    price: req.body.price,
    user: req.authUser._id,
  });
  res.status(201).json({
    message: "Product added successfully.",
  });
};

const getProductById = async (req, res) => {
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
