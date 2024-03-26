const express = require('express');
const ejs = require('ejs');
var bodyparser =require('body-parser');

var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.listen(8080);
app.use(bodyparser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
res.render('pages/index')
})