require('dotenv').config();
const express = require('express');
const app = express();
const port: string = process.env.PORT || "8888";
const Alpaca = require('@alpacahq/alpaca-trade-api');

const alpaca = new Alpaca({
    keyId: process.env.KEYID,
    secretKey: process.env.SECRET,
    paper: true,
});

app.get('/account', (req: any, res: any)=>{
    alpaca.getAccount().then((account: JSON) => {
        res.send(account);
    });
});

app.get('/history', (req: any, res: any)=>{
    alpaca.getPortfolioHistory({
        period: 'all',
    }).then((history: JSON) => {
        res.send(history);
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});