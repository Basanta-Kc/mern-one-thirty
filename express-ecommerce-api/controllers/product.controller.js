const Product = require("../models/Product");
const Order = require("../models/Order");
const stripe = require("stripe")(
  "sk_test_51M2ALFFEon6AQRRqZGoTHmXZFVSKoxQVoFRYpjpHMNeZ7CuWF2i2MEuVXCLDRGceLSR9Fh1tjLQp5aUK76gEHyX100Oz1EleVm"
);

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
    image: req?.file?.filename,
    featured: req.body.featured,
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
  await Product.updateOne(
    { _id: id },
    { ...req.body, image: req.file.filename }
  );
  res.status(200).json({
    message: "Product updated succesfully.",
  });
};

const getFeaturedProducts = async (req, res) => {
  const products = await Product.find({ featured: true }).limit(4);
  res.status(200).json({
    message: "Product fetched succesfully.",
    data: products,
  });
};

const getLatestProducts = async (req, res) => {
  const products = await Product.find()
    .sort({
      createdAt: "desc",
    })
    .limit(4);
  res.status(200).json({
    message: "Product fetched succesfully.",
    data: products,
  });
};

// req.body = {
//     totalPrice: 100,
//     products: [
//         {
//             product: 1,
//             quantiy: 2
//         },
//         {
//             product: 1,
//             quantiy: 2
//         },
//     ]
// }
// checkAuth // req.authUser = user
const createOrder = async (req, res) => {
  const line_items = [];
  let totalPrice = 0;
  for (let { product, quantity } of req.body.products) {
    console.log(product);
    const productInfo = await Product.findById(product);
    console.log(productInfo);
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: productInfo.price * 100,
      product_data: {
        name: productInfo.name,
      },
    });
    totalPrice += productInfo.price * quantity;
    line_items.push({
      price: price.id,
      quantity,
    });
  }

  const newOrder = new Order({
    user: req.authUser._id,
    ...req.body,
    totalPrice, // should be calculated in backend
  });

  const order = await newOrder.save();

  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:5173/success",
    line_items,
    mode: "payment",
    metadata: {
      orderId: order._id.toString(),
    },
  });

  res.json({
    message: "Order created succesfully.",
    url: session.url,
  });
};

const getOrders = async (req, res) => {
  const { page = 1, limit = 100 } = req.query;

  const filter = {
    user: req.authUser._id,
  };

  if (req.query.status) {
    filter.status = req.query.status;
  }

  const orders = await Order.find(filter)
    .limit(limit)
    .skip((page - 1) * limit ?? 10);

  const total = await Order.countDocuments(filter);

  res.status(200).json({
    message: "Orders fetched successfully",
    data: {
      page,
      total,
      data: orders,
    },
  });
};

module.exports = {
  getProductById,
  getProducts,
  deleteProductById,
  updateProductById,
  addProduct,
  getFeaturedProducts,
  getLatestProducts,
  createOrder,
  getOrders,
};
