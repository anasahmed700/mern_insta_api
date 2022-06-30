/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('sending get req to home');
  res.send("Hello");
});

router.post('/signup', (req, res) => {
  const {name, email, password} = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({error: "Please add all required fields!"});
  }
  res.json({message: "Record has been added"});
});

module.exports = router;