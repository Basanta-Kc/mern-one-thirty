const Product = require("../models/Product");

//home-work: validate the query fields using express-validaator
// total ma ailey 0 xa tesma total count,
// order => desc, asc
// page ra limit => positve number
// search
// create admin.controller.ts /admin/users (pagination, search by name and email), admin/products
// file upload (multer)
const getProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  // Home Work:
  // ?name=shoes
  // ?priceOrder=asc | desc
  // ?name=shoes&priceOrder=asc
  // search by name, price anusar sorting (asc descending)
  // wher name like %search%
  const sortByFilter = {};

  if (req.query.order) {
    sortByFilter.price = req.query.order;
  }

  const filter = { name: new RegExp(req.query.search) };

  if (req.query.minPrice && req.query.maxPrice) {
    filter.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
  }
  // whre price >= 200 and price <= 300
  const products = await Product.find(filter)
    .sort(sortByFilter)
    .limit(limit)
    .skip((page - 1) * limit ?? 10);
  // page =1, skip = 0, page=2, skip = 2 (2 * 1), page=3 skip =4 (2 * 2), page =4 skip = 6 (2 * 3)

  const total = await Product.countDocuments(filter);

  res.status(200).json({
    message: "Products fetched successfully",
    data: {
      page,
      total,
      data: products,
    },
  });
};

const addProduct = async (req, res) => {
  await Product.create({
    name: req.body.name,
    price: req.body.price,
    user: req.authUser._id,
    image: req.file.filename,
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
