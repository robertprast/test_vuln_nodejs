var express = require("express");
var app = express();

app.get("/", function (req, res) {
  let test = [req.query.tes];
  res.send(eval(test[0]));
  console.log(req.query.test);
  //   res.send("HI")
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
