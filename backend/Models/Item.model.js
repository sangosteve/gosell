const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  cost: {
    type: Number,
  },
});

const Item = mongoose.model("items", ItemSchema);
module.exports = Item;
