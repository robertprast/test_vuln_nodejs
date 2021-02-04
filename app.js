var express = require("express");
var app = express();

app.get("/test1", function (req, res) {
  let str = "<html>test " + req.query.test;
  res.send(str);
});

app.get("/test2", function (req, res) {
  let str = "<html>test " + req.query.test;
  res.send(str);
});

app.get("/test3", function (req, res) {
  let test = [req.query.test];
  res.send(eval(test[0]));
});

// app.get("/", function (req, res) {
//   let str = "<html>test " + req.query.test;
//   res.send(str);
// });

// function random(a) {
//   return btoa(a);
// }

// app.get("/3", function (req, res) {
//   let str = "<html>test " + random(req.query.test);
//   res.send(str);
// });

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
