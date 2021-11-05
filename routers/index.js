const express = require('express')
const app = express()
const generalRouter = require('./general.router');
const protectedRouter = require("./protected.router");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use("/general", generalRouter);
app.use("/protected", protectedRouter);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)