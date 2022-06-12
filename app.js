/*jshint esversion: 6 */

require('./models/user');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const {MONGOURI} = require('./keys');

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('mongodb connected');
});
mongoose.connection.on('error', (err) => {
  console.log('error connecting', err);
});

app.listen(PORT, () => {
  console.log('Node server is running on port', PORT);
});