var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/shemmars', function (req, res) {
  res.send('Hello shem today from shemdev raining down on me!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

