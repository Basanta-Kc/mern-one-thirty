const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/one-thirty-shop").then(() => {
  console.log("Database Connected");
});

// const Cat = mongoose.model("Cat", { name: String });

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

app.use(express.json());

// Home Work
let users = [
  {
    id: 1,
    name: "basanta",
    email: "devbasanta@mgail.com",
    password: "2343423432",
    age: 10,
    school: "Nature Boarding High School",
  },
];

// Home Work
let category = [
  {
    id: 1,
    name: "Men",
  },
  {
    id: 2,
    name: "Women",
  },
];

// Tasks:
// Create Api to
// 1. get /users
// 2. get /users/1
// 3. post /users/add
// 4. patch /user/update/1 { name: 'anish'}
// 5. delete /user/delete/2

// Category { name: "Men"}
// [{name: Men}, {"Women"}]

let orders = [
  {
    id: 1,
    user: 1,
    product: [1, 2],
    total: 200, // calculate total by yourself
  },
];

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

// mongodb (database)
let products = [
  {
    id: 1,
    name: "Bag",
    price: 100,
  },
  {
    id: 2,
    name: "Watch",
    price: 200,
  },
  {
    id: 3,
    name: "Women Bag",
    price: 200,
  },
];

app.get("/products", (req, res) => {
  Product.find().then((products) => {
    res.json({
      message: "Products fetched successfully",
      data: products,
    });
  });
});

app.post("/products/add", (req, res) => {
  // req.body {name: shoe, price: 100}
  Product.create(req.body).then(() => {
    res.json({
      message: "Product added successfully.",
    });
  });
});

app.get("/products/:productId", (req, res) => {
  Product.findById(req.params.productId).then((product) => {
    res.json({ message: "Product fetched successfully", data: product });
  });
});

app.delete("/products/delete/:productId", (req, res) => {
  Product.deleteOne({ _id: req.params.productId }).then(() => {
    res.json({
      message: "Product deleted succesfully",
    });
  });
});

app.patch("/products/update/:id", (req, res) => {
  const id = req.params.id;
  const productToBeupdated = products.find((product) => product.id === +id);
  productToBeupdated.name = req.body.name;
  res.json({
    message: "Product updated succesfully.",
    data: productToBeupdated,
  });
});

app.get("/sign-in", (req, res) => {
  res.send("signin page");
});

app.listen(port, () => {
  console.log(`Ecommerce app listening on port ${port}`);
});
