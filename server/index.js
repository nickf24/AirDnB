const express = require('express');
const app = express();
const parser = require('body-parser');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('FlyingMongeese listening on PORT 3000!');
});