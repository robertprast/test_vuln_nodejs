/*
NodeJS test setup for testing SnykCode
    - only dependency is express
*/

var express = require("express");
var app = express();

/*
GENERAL TEST 1

Code order : 
    Test 3 , Test 1 , Test 2
SnykeCode Result: 
    Test 1 -> Nothing
    Test 2 -> Nothing
    Test 3 -> XSS , Code Injection
*/

app.get("/test3", function (req, res) {
  let test = [req.query.test];
  res.send(eval(test[0]));
});
app.get("/test1", function (req, res) {
  let str = "<html>testasdas" + req.query.test;
  res.send(str);
});
app.get("/test2", function (req, res) {
  let str = "<html>test " + req.query.test;
  res.send(str);
});

/*
GENERAL TEST 2

Code order : 
    Test 1 , Test 2 , Test 3
SnykeCode Result: 
    Test 1 -> XSS
    Test 2 -> Nothing
    Test 3 -> Code Injection
*/

// app.get("/test1", function (req, res) {
//   let str = "<html>testasdas" + req.query.test;
//   res.send(str);
// });
// app.get("/test2", function (req, res) {
//   let str = "<html>test " + req.query.test;
//   res.send(str);
// });
// app.get("/test3", function (req, res) {
//   let test = [req.query.test];
//   res.send(eval(test[0]));
// });


app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
