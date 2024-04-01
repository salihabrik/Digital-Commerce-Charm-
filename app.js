const express = require('express');
const app = express();
const session = require('express-session');
const ejs = require('ejs');
var bodyParser = require('body-parser');
var fs =require('fs');
const mysql = require('mysql');
const dotenv =require('dotenv');
const path = require('path');
dotenv.config({path:'./.env'});


const db = mysql.createConnection({
    host: process.env.DATABASE_Host,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


app.set( ('view engine', 'hbs'))

db.connect( (error) => {
    if(error) {
        console.log(error);
    } else {
       console.log("MYSQL Connected....") 
    }
})

app.get("/", function(req, res) {
    res.render("pages/index");
});

app.listen(3002, function() {
    console.log("Server started on port 3002");
})


// db.connect((error) => {
// if(error) {
//     console.log(error)
//     }else{
//         console.log("mysql connect")
//     }
// })




const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle login
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     const users = JSON.parse(fs.readFileSync('users.json'));

//     const user = users.find(user => user.username === username && user.password === password);

//     if (user) {
//         res.status(200).send('Login successful!');
//     } else {
//         res.status(401).send('Invalid credentials');
//     }
// });

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

// con.connect(function(err) {
//     if (err) {
//         console.error('Error connecting to Db');
//         return process.exit(1);
//     }
//     console.log('Connection established');
// });

// con.on('error', function(err) {
//     console.log('Database error', err);
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Reconnection logic
//         con = mysql.createConnection(con.config);
//     } else {
//         throw err;
//     }
// });


app.use(express.static('public'));
app.set('view engine', 'ejs');
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     const users = JSON.parse(fs.readFileSync('users.json'));
// })
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.listen(3000, () => {
//     console.log('server is start on port 3000');
// });

// app.get('/', (req, res) => {
//     con.query("SELECT * FROM products", (err, result) => {
//         if (err) throw err;
//         res.render('pages/index', { result: result });
//     });
// });  
// router.get('/',(req,res)=>{
//     res.render('pages/index');
// });
app.get('/login.ejs', (req, res) => {
    res.render('pages/login',);
});

const publicDirectory =path.join(__dirname,'./public')
app.use(express.static(publicDirectory));

// app.get('/register.ejs',(req,res)=>{
//     res.render('pages/register');
// });
//Define routes
app.use('/',require('./routes/pages'))
app.use('/auth',require('./routes/auth'));

// app.post('/add_to_cart', (req, res) => {
//     var product = req.body;
//     if (req.session.cart == null) {
//         req.session.cart = [];
//         req.session.cart.push(product);
//         req.session.total = product.price;
//     } else {
//         var cart = req.session.cart;
//         var position = -1;
//         for (var i = 0; i < cart.length; i++) {
//             if (cart[i].id == product.id) {
//                 position = i;
//                 break;
//             }
//         }
//         if (position >= 0) {
//             cart[position].quantity += product.quantity;
//         } else {
//             cart.push(product);
//         }
//         req.session.total += product.price;
//     }
//     res.redirect('/cart');
// });

// app.get('/cart', function (req, res) {
//     var cart = req.session.cart;
//     var total = req.session.total;
//     res.render('pages/cart', {
//         cart: cart,
//         total: total
//     });
// });

// app.post('/remove_product', function (req, res) {
//     var id = req.body.id;
//     var cart = req.session.cart;
//     var total = req.session.total;
//     for (let i = 0; i < cart.length; i++) {
//         if (cart[i].id == id) {
//             total -= cart[i].price;
//             cart.splice(i, 1);
//             break;
//         }
//     }
//     req.session.cart = cart;
//     req.session.total = total;
//     res.redirect('/cart');
// });

// app.post('/edit_product_quantity', function (req, res) {
//     var id = req.body.id;
//     var quantity = req.body.quantity;
//     var increase_btn = req.body.increase_product_quantity;
//     var decrease_btn = req.body.decrease_product_quantity;

//     var cart = req.session.cart;

//     for (let i = 0; i < cart.length; i++) {
//         if (cart[i].id == id) {
//             if (increase_btn && cart[i].quantity > 0) {
//                 cart[i].quantity += 1;
//             } else if (decrease_btn && cart[i].quantity > 0) {
//                 cart[i].quantity -= 1;
//             }
//             break;
//         }
//     }

//     req.session.cart = cart;
//     res.redirect('/cart');
// });

// app.get('/checkout', function (req, res) {
//     var cart = req.session.cart;
//     var total = req.session.total;
//     res.render('pages/checkout', {
//         cart: cart,
//         total: total
//     });
// });

// app.post('/place_order', function (req, res) {
//     var order = req.body;
//     var cart = req.session.cart;
//     var total = req.session.total;
//     var query = "INSERT INTO orders SET ?";
//     var values = {
//         ...order,
//         total: total
//     };
//     con.query(query, values, (err, result) => {
//         if (err) throw err;
//         req.session.cart = [];
//         req.session.total = 0;
//         res.redirect('/payment');
//     });
// });

// app.get('/payment', function (req, res) {
//     var total = req.session.total;
//     res.render('pages/payment', { total: total });
// });

/*
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

app.post('/add_to_cart',(req,res)=>{
    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"node_project"
    })
    var id = req.body.id;
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var sale_price = req.body.sale_price;
    var quantity = req.body.quantity;
    var product = {
        id:id,
        name:name,
        price:price,
        image:image,
        sale_price:sale_price,
        quantity:quantity
    }
    if(req.sessions.cart == null)
    {
        req.sessions.cart = [];
        req.sessions.cart.push(product);
        req.sessions.total = price;
    }
    else
    {
        var cart = req.sessions.cart;
        var position = -1;
        for (var i = 0; i < cart.length; i++)
        {
    var total = req.body.total;
    con.query("SELECT * FROM prodcuts WHERE id="+id,function(err,result){
        if(result.length > 0)
        {
            res.redirect('/cart');
        }
        else
        {
            res.redirect('/cart');
        }
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

app.post('/edit_product_quantity', function(req, res){
    var id = req.body.id;
    var quantity = req.body.quantity;
    var increase_btn = req.body.increase_product_quantity;
    var decrease_btn = req.body.decrease_product_quantity;
   
    var cart = req.session.cart;

    if(increase_btn )
    {
        for (let i = 0; i < cart.length; i++)
        {
            if (cart[i].id == id)
            {
            if(cart[i].quantity) > 0
            {
                cart[i].quantity = parseInt(cart[i].quantity) + 1;
            }
        }
        }
    }

    if(decrease_btn)
    {
        for (let i = 0; i < cart.length; i++)
        {
            if (cart[i].id == id)
            {
            if(cart[i].quantity) > 0
            {
                cart[i].quantity = parseInt(cart[i].quantity) - 1;
            }
        }
        }
    }

    calculateTotal(cart, req);
    req.session.cart = cart;
    req.session.total = total;
    res.redirect('/cart');
})

app.get('/checkout', function(req, res){

    var cart = req.sessions.cart;
    var total = req.sessions.total;
    res.render('pages/checkout',
    {
        cart:cart,
        total:total
    });
    app.post('/place_order', function(req, res){
        var name = req.body.name;
        var email = req.body.email;
        var address = req.body.address;
        var city = req.body.city;
        var state = req.body.state;
        var country = req.body.country;
        var zipcode = req.body.zipcode;
        var phone = req.body.phone;
        var card_number = req.body.card_number;
        var card_cvv = req.body.card_cvv;
        var card_expiry = req.body.card_expiry;
        var card_name = req.body.card_name;
        var card_address = req.body.card_address;
        var card_city = req.body.card_city;
        var card_state = req.body.card_state;
        var card_country = req.body.card_country;
        var card_zipcode = req.body.card_zipcode;
        var card_phone = req.body.card_phone;
        var cart = req.session.cart;
        var total = req.session.total;
        req.session.cart = cart;
        req.session.total = total;
        res.redirect('/order');
    })
var cart = req.sessions.cart;
var total = req.sessions.total;
for (let i = 0; i < cart.length; i++){
    products_ids = products_ids + cart[i].id +  ",";
    products_names = products_names + cart[i].name +  ",";
}
    con.connect((err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            var query = "INSERT INTO orders (name, email, address, city, state, country, zipcode, phone, card_number, card_cvv, card_expiry, card_name, card_address, card_city, card_state, card_country, card_zipcode, card_phone, total) VALUES ('"+name+"', '"+email+"', '"+address+"', '"+city+"', '"+state+"', '"+country+"', '"+zipcode+"', '"+phone+"', '"+card_number+"', '"+card_cvv+"', '"+card_expiry+"', '"+card_name+"', '"+card_address+"', '"+card_city+"', '"+card_state+"', '"+card_country+"', '"+card_zipcode+"', '"+card_phone+"', '"+total+"')";
            var VALUES = [cost,name, email, address, city, state, country, zipcode, phone, card_number, card_cvv, card_expiry, card_name, card_address, card_city, card_state, card_country, card_zipcode, card_phone, total];
            con.query(query, VALUES, (err, result)=>{

                res.redirect('/payment');
                console.log(result);
            })
        }

        
    })

})

app.get('/payment', function(req, res){
    var total = req.sessions.total;
    res.render('pages/payment', {total:total});
    

    })
    */
// app.get('/cart', function(req, res){

