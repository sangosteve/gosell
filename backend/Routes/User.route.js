const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User.model");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const result = await user.save();
    const { password, ...data } = await result.toJSON();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(404).send({ message: "user not found" });

  if (!(await bcrypt.compare(req.body.password, user.password)))
    return res.status(404).send({ message: "Invalid username or password" });

  const token = jwt.sign({ _id: user._id }, "ZSE4XDR5CFT6", {
    expiresIn: "30s",
  });

  res.send({ message: "Login success", token: token });
});

module.exports = router;
