require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || "8888";
var Alpaca = require('@alpacahq/alpaca-trade-api');
var alpaca = new Alpaca({
    keyId: process.env.KEYID,
    secretKey: process.env.SECRET,
    paper: true
});
app.get('/account', function (req, res) {
    alpaca.getAccount().then(function (account) {
        res.send(account);
    });
});
app.get('/history', function (req, res) {
    alpaca.getPortfolioHistory({
        period: 'all'
    }).then(function (history) {
        res.send(history);
    });
});
app.listen(port, function () {
    console.log("Listening on port: ".concat(port));
});
