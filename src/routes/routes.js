const express = require('express');
const { login } = require('../midellware/controller');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola a la api');
});

app.get('/login', login);

module.exports = app;