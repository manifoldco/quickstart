var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(`${process.env.HELLO} ${process.env.WORLD}`);
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
