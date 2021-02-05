/*
NodeJS test setup for testing SnykCode
    - only dependency is express

Directions:
    Uncomment the code snippet for a corresponding test
*/

var express = require("express");
var app = express();

/************************************************/
/*
GENERAL TEST a

Code order : 
    Test 3 , Test 1 , Test 2
SnykeCode Result: 
    Test 1 -> Nothing
    Test 2 -> Nothing
    Test 3 -> XSS , Code Injection
*/

app.get("/test3a", function (req, res) {
  let test = [req.query.test];
  res.send(eval(test[0]));
});
app.get("/test1a", function (req, res) {
  let str = "<html>testasdas" + req.query.test;
  res.send(str);
});
app.get("/test2a", function (req, res) {
  let str = "<html>test " + req.query.test;
  res.send(str);
});

/************************************************/
/*
GENERAL TEST b

Code order : 
    Test 1 , Test 2 , Test 3
SnykeCode Result: 
    Test 1 -> XSS
    Test 2 -> Nothing
    Test 3 -> Code Injection
*/

app.get("/test1b", function (req, res) {
  let str = "<html>testasdas" + req.query.test;
  res.send(str);
});
app.get("/test2b", function (req, res) {
  let str = "<html>test " + req.query.test;
  res.send(str);
});
app.get("/test3b", function (req, res) {
  let test = [req.query.test];
  res.send(eval(test[0]));
});

/************************************************/
/* GENERAL TEST c

Code order : 
    Test 2 , Test 3, Test 1 
SnykeCode Result: 
    Test 1 -> Nothing
    Test 2 -> XSS
    Test 3 -> Code Injection
*/
app.get("/test2c", function (req, res) {
  let str = "<html>test " + req.query.test;
  res.send(str);
});
app.get("/test3c", function (req, res) {
  let test = [req.query.test];
  res.send(eval(test[0]));
});
app.get("/test1c", function (req, res) {
  let str = "<html>testasdas" + req.query.test;
  res.send(str);
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
