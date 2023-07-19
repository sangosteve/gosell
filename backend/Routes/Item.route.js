const express = require("express");
const router = express.Router();

const Item = require("../Models/Item.model");

//Fetch Items

router.get("/", async (req, res, next) => {
  try {
    const results = await Item.find();
    res.status(200).json(results);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Item.findById(id);
    res.send(results);
  } catch (err) {
    console.log(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { name, description, price, cost } = req.body;
    const results = await Item.create({ name, description, price, cost });
    res.send(results);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
