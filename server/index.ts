require('dotenv').config();
const express = require('express');
const app = express();
const port: string = process.env.PORT || "8888";

const greeting: string = "hello world 2";

console.log(greeting);

console.log(process.env.KEYID);
console.log(process.env.SECRET);

app.get('/', (req,res)=>{
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});