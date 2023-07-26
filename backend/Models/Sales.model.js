const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SaleSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  client: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  orderItems: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      cost: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Item",
      },
    },
  ],
  subTotal: {
    type: Number,
  },
  total: {
    type: Number,
  },
});

const Sale = mongoose.model("Sales", SaleSchema);
module.exports = Sale;
