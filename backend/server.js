const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 2023;
//parsing the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Enable CORS
app.use(cors());
//MONGOOSE
mongoose
  .connect(
    "mongodb+srv://blackjack:blackjack@cluster0.aor3g.mongodb.net/gosell?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("db connected successfully");
  });

const ItemRoute = require("./Routes/Item.route");
const ClientRoute = require("./Routes/Client.route");
const SaleRoute = require("./Routes/Sale.route");
const UserRoute = require("./Routes/User.route");
app.use("/items", ItemRoute);
app.use("/clients", ClientRoute);
app.use("/sales", SaleRoute);
app.use("/auth", UserRoute);
app.listen(PORT, () => {
  console.log("server is started on port " + PORT);
});
