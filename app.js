/*
NodeJS test setup for testing SnykCode
    - only dependency is express
    - npm i #download node dependicies

Directions:
    Run each test invidually at first
    Uncomment the code snippet for a corresponding test
    Comment all other code snippets

    Run all tests together
        -> Running all tests at once will only show results from Test a , test b and test c have no vulns
*/
var fs = require("fs");
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

// app.get("/test3a", function (req, res) {
//   let test = [req.query.test];
//   res.send(eval(test[0]));
// });
// app.get("/test1a", function (req, res) {
//   let str = "<html>testasdas" + req.query.test;
//   res.send(str);
// });
// app.get("/test2a", function (req, res) {
//   let str = "<html>test " + req.query.test;
//   res.send(str);
// });

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

// app.get("/test1b", function (req, res) {
//   let str = "<html>testasdas" + req.query.test;
//   res.send(str);
// });
// app.get("/test2b", function (req, res) {
//   let str = "<html>test " + req.query.test;
//   res.send(str);
// });
// app.get("/test3b", function (req, res) {
//   let test = [req.query.test];
//   res.send(eval(test[0]));
// });

/************************************************/
/* GENERAL TEST c

Code order : 
    Test 2 , Test 3, Test 1 
SnykeCode Result: 
    Test 1 -> Nothing
    Test 2 -> XSS
    Test 3 -> Code Injection
*/
// app.get("/test2c", function (req, res) {
//   let str = "<html>test " + req.query.test;
//   res.send(str);
// });
// app.get("/test3c", function (req, res) {
//   let test = [req.query.test];
//   res.send(eval(test[0]));
// });
// app.get("/test1c", function (req, res) {
//   let str = "<html>testasdas" + req.query.test;
//   res.send(str);
// });

/************************************************/
/* GENERAL TEST d
 */
// app.get("/testd", function (req, res) {
//   let str = req.query.test;
//   fs.open(str, "r", function (err, file) {
//     if (err) throw err;
//   });
// });
const tmp = require("./helper");
app.get("/testd1", (req, res) => {
  tmp.badFileOpen(req.body.test);
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
