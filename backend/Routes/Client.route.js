const express = require("express");
const router = express.Router();

const Client = require("../Models/Client.model");

//Fetch Clients

router.get("/", async (req, res, next) => {
  try {
    const results = await Client.find();
    res.status(200).json(results);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Client.findById(id);
    res.send(results);
  } catch (err) {
    console.log(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { name, phone, email, comments } = req.body;
    const results = await Client.create({ name, phone, email, comments });
    res.send(results);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
