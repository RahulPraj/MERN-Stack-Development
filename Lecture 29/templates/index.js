const express = require('express');
const app = express();
const path = require('path');

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))

app.get('/',(req,res)=>{
    res.send("root route connected")
})

let arr = ['morni' , 'banke' , 'kithe' , 'chaliye']
let rn = Math.floor(Math.random()*44 + 4 );

app.get('/page1' , (req,res)=>{
    res.render('index', {arr})
})


app.get('/rondu' , (req,res)=>{
    res.render('rondu' , {rn});
})

app.listen(8080, ()=>{
    console.log('server is connected to 8080');
})