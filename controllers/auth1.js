const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const db = mysql.createConnection({
    host: process.env.DATABASE_Host,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


exports.register =(req,res) =>{
    console.log(req.body);
    

const { name, email, password, passwordConfirm } = req.body;

db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
    if (error) {
        console.log(error);
    }
    if (results.length > 0) {
        return res.render('register', {
            error: "Email already exists"
        });
    }
    else if (password !== passwordConfirm) {
        return res.render('register', {
            error: "Passwords do not match"
        });
    }
    let hashedPassword = await bcrypt.hash(password, 8);
    db.query('INSERT INTO users (name, email, password) VALUES (?,?,?)', [name, email, hashedPassword], async (error, results) => {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.redirect('register');
        return res.render
    });



})

res.send("Form submitted");

}