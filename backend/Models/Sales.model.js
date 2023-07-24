const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SaleSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  client_id: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
  },
  transactions: [
    {
      item_id: {
        type: mongoose.Types.ObjectId,
        ref: "Item",
      },

      qty: String,
    },
  ],
  subTotal: {
    type: String,
  },
  total: {
    type: String,
  },
});

const Sale = mongoose.model("Sales", SaleSchema);
module.exports = Sale;
