const express = require('express');
const path = require('path');
const fs = require('fs');
// const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

const errorPage = fs.readFileSync('errorPage.html','utf-8');
let staticPath = __dirname;

app.set('view engine','hbs');

app.use(express.static(staticPath));

app.get("", (req,res)=>{
    res.render('index');
})

app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("*",(req, res)=>{
    res.render('errorPage');
})

app.listen(port, ()=>{
    console.log("Server is running");
})

