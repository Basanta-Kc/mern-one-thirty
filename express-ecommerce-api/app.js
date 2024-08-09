const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Home Work
let users = [
  {
    id: 1,
    name: "basanta",
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
  const search = req.query.search;
  let data = products;

  if (search) {
    data = products.filter((product) => {
      return product.name.toLowerCase().includes(search);
    });
  }

  res.json({
    message: "Products fetched successfully",
    data,
  });
});

app.post("/products/add", (req, res) => {
  products.push(req.body);
  res.json({
    message: "Product added successfully.",
  });
});

app.get("/products/:productId", (req, res) => {
  const product = products.find(
    (product) => product.id === +req.params.productId
  );
  res.json({ message: "Product fetched successfully", data: product });
});

app.delete("/products/delete/:id", (req, res) => {
  const id = req.params.id;
  products = products.filter((product) => product.id !== +id);
  res.json({
    message: "Product deleted succesfully",
    data: products,
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
