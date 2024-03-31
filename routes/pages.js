const express = require('express')
const router = express.Router();
// router.get('/',(req,res)=>{
//     res.render('index');
// });

// router.get('/register',(req,res)=>{
//     res.render('register');
// });
router.get('/',(req,res)=>{
    res.render('pages/index');
});
router.get('/login.ejs',(req,res)=>{
    res.render('pages/login');
});

module.exports =router;