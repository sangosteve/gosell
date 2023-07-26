const express = require("express");
const router = express.Router();

const Sale = require("../Models/Sales.model");

router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);
    const { client, orderItems, subTotal, total } = req.body;

    const results = await Sale.create({
      client,
      orderItems,
      subTotal,
      total,
    });
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
  }
});

router.get("/total_revenue", async (req, res, next) => {
  try {
    const { start_date, end_date } = req.body;

    const total_revenue = await Sale.aggregate([
      {
        $match: {
          date: {
            $gte: new Date(start_date),
            $lte: new Date(end_date),
          },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: { $toInt: "$total" },
          },
        },
      },
    ]);

    res.status(200).send(total_revenue);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
