/* jshint esversion: 6 */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  console.log("sending get req to home");
  res.send("Hello");
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "Please add all required fields!" });
  }
  // unique email validation
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "User already exist!" });
      }

      bcrypt.hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            email,
            name,
            password: hashedPassword,
          });

          user.save()
            .then((user) => {
              res.json({ message: "User has been saved", data: user });
            })
            .catch((err) => {
              res.json(err);
            });
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
