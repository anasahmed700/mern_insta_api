/*jshint esversion: 6 */

const express = require('express');
const app = express();
const PORT = 5000;

const customMiddleware = (req, res, next) => {
  console.log('middleware running!');
  next();
};

// app.use(customMiddleware);

app.get('/', (req, res) => {
  console.log('Home page running!');
  res.send('Hello from Node');
});

app.get('/about', customMiddleware, (req, res) => {
  console.log('About page running!');
  res.send('About page');
});

app.listen(PORT, () => {
  console.log('Node server is running on port', PORT);
});