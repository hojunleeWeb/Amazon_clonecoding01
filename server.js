const express = require("express");
const app = express();

app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/script"));

app.listen(8080, function () {
  console.log("listening on 8080");
  console.log(__dirname);
});

app.get("/main", function (req, res) {
  res.sendFile(__dirname + "/main.html");
});
app.get("/product", function (req, res) {
  res.sendFile(__dirname + "/product.html");
});
