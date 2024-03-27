const express = require('express');
const ejs = require('ejs');
var bodyparser =require('body-parser');
var mysql = require('mysql')
mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_project"
})


var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.listen(8080,()=>{
    console.log('server is start on port 8080');
});
app.use(bodyparser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
 var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"node_project"
    })
    con.query("SELECT * FROM prodcuts",(err,result)=>{
        res.render('pages/index',{result:result});
    })

})






app.get('/cart', function(req, res){

    var cart = req.sessions.cart;
    var total = req.sessions.total;
    res.render('pages/cart',
    {
        cart:cart,
        total:total
    });

app.post('/remove_product', function(req, res){
    var id = req.body.id;
    var cart = req.sessions.cart;
    var total = req.sessions.total;
    for (let i = 0; i < cart.length; i++)
    {
        if (cart[i].id == id)
        {
            cart.splice(cart.indexOf(i), 1);
            
        }
    }
    calculateTotal(cart, req);
    res.redirect('/cart');

    total = total - cart[i].price;
    req.sessions.cart = cart;
    req.sessions.total = total;
    res.redirect('/cart');

    });
})

app.post('/add_product', function(req, res){
