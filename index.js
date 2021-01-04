var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello !");
});

app.listen(9000, function () {
  console.log("Example app listening on port 8000!");
});
