const bodyParser = require('body-parser');
const express = require('express')
const port = 3000
const app=express();
app.use(bodyParser.json());

//fs.readFile("path"."utf-7")
app.get('/', function(req, res) {
  res.send('<b>Hello Worl!</b>')
})

app.listen(port,'0.0.0.0',function () {
  console.log(`Example app listening on port ${port}`)
})