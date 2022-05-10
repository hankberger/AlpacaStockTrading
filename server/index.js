require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || "8888";
var greeting = "hello world 2";
console.log(greeting);
console.log(process.env.KEYID);
console.log(process.env.SECRET);
app.get('/', function (req, res) {
    res.send("hello world");
});
app.listen(port, function () {
    console.log("Listening on port: " + port);
});
