const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8000;

const errorPage = fs.readFileSync('errorPage.html','utf-8');
let staticPath = __dirname;

app.use(express.static(staticPath));

app.get("",(req,res)=>{
    res.send();
});

app.get("*",(req, res)=>{
    res.send(errorPage);
})

app.listen(port, ()=>{
    console.log("Server is running");
})

