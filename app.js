const express = require('express')
const path =require('path')

const app = express()

app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')

app.get('/',(req,res,next)=>{
    res.render('index')
})

app.listen(3000,()=>{
    
console.log('server listen on port 3000')
})