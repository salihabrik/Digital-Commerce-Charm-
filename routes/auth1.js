const express = require('express')
const router = express.Router();
const authController =require('../controllers/auth')

// router.get('/register',(req,res)=>{
//     res.render('register');
// });

router.post('/login',authController.register)

module.exports =router;