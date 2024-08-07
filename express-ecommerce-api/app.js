const express = require("express");
const app = express();
const port = 3000;

const products = [
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
    id: 2,
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

app.get("/products/:productId", (req, res) => {
  const product = products.find(
    (product) => product.id === +req.params.productId
  );
  res.json({ message: "Product fetched successfully", data: product });
});

app.get("/sign-in", (req, res) => {
  res.send("signin page");
});

app.listen(port, () => {
  console.log(`Ecommerce app listening on port ${port}`);
});
