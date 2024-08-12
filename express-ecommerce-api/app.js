const express = require("express");
const app = express();
const port = 3003;
const connectDb = require("./config/db");
const {
  getProductById,
  getProducts,
  deleteProductById,
  updateProductById,
  addProduct,
} = require("./controllers/product.controller");

app.use(express.json());

connectDb();

// Routes For Product
app.get("/products", getProducts);
app.post("/products/add", addProduct);
app.get("/products/:productId", getProductById);
app.delete("/products/delete/:productId", deleteProductById);
app.patch("/products/update/:productId", updateProductById);

// User

// Category

app.listen(port, () => {
  console.log(`Ecommerce app listening on port ${port}`);
});
