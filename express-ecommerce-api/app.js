const express = require("express");
const app = express();
const port = 3000;

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

app.get("/products/add", (req, res) => {
  products.push(req.query);
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

app.get("/products/delete/:id", (req, res) => {
  const id = req.params.id;
  products = products.filter((product) => product.id !== +id);
  res.json({
    message: "Product deleted succesfully",
    data: products,
  });
});

app.get("/products/update/:id", (req, res) => {
  const id = req.params.id;
  const productToBeupdated = products.find((product) => product.id === +id);
  productToBeupdated.name = req.query.name;
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
