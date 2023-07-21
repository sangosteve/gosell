const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ClientSchema = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  comments: {
    type: String,
  },
});

const Client = mongoose.model("Clients", ClientSchema);
module.exports = Client;
