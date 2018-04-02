const express = require('express');

const app = express();
app.get('/api/test', (req, res) => {
  res.send("OK");
});

module.exports = app;
