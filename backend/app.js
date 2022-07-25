const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
// Import Routes
const userRoute = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const stripeRouter = require("./routes/stripe");
const cookieParser = require("cookie-parser");
dotenv.config();
// Database Connection
mongoose
  .connect(process.env.DB_URI, {})
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });
// Routes

app.use("/api/auth", authRouter);
app.use("/api/user", userRoute);
app.use(cookieParser());
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
