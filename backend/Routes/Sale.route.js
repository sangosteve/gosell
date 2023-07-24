const express = require("express");
const router = express.Router();

const Sale = require("../Models/Sales.model");

router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);
    const { client_id, transactions, subTotal, total } = req.body;

    const results = await Sale.create({
      client_id,
      transactions,
      subTotal,
      total,
    });
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
