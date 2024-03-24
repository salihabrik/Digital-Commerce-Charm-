const express = require('express')
const path =require('path')

const app = express()

app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')

app.get('/',(req,res,next)=>{
    res.render('./index.ejs')
})

// app.get('/', (req, res) => {
//     res.render(path.join(__dirname, 'index.ejs'));
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.ejs'));
// });

app.listen(3000,()=>{
    
console.log('server listen on port 3000')
})