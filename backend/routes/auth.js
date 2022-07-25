const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");
// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("User not found");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const realPassword = await hashedPassword.toString(CryptoJS.enc.Utf8);
    realPassword !== req.body.password &&
      res.status(401).json("Invalid Credentials");
    // Token
    const token = JWT.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.header("auth-token", token).send({ ...others, token });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
