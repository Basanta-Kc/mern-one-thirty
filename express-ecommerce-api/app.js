const express = require("express");
const app = express();
const port = 3003;
const { query, validationResult } = require("express-validator");
const connectDb = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

app.use(express.json());

connectDb();

app.get(
  "/add-product",
  query("name").notEmpty(),
  query("price").notEmpty(),
  (req, res) => {
    const result = validationResult(req);
    res.json({
      errors: result.array(),
    });
  }
);

app.use("/products", productRoutes);
app.use("/auth", authRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not found.",
  });
});

app.listen(port, () => {
  console.log(`Ecommerce app listening on port ${port}`);
});
