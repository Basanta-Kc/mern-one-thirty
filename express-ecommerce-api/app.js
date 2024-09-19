const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
const port = 3003;
const connectDb = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

connectDb();

app.get("/test", async (req, res, next) => {
  res.staus(202).json({
    message: "ok",
  });
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not found.",
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong.",
  });
});

app.listen(port, () => {
  console.log(`Ecommerce app listening on port ${port}`);
});

// Home Work: Add validtor for all the end points
// Add product api can be called by user without admin role what can we do about it??

// Role based authroization,
// Error handling.
