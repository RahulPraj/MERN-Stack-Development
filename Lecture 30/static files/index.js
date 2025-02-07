const express = require('express');
const app = express();
const path = require('path');

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))

// index route
app.get('/index' , (req,res)=>{
    res.render('india/index')
})

// about route
app.get('/about' , (req,res)=>{
    res.render('india/about')
})


app.get('/', (req,res)=>{
    res.send('root route is connected')
})



app.listen(8080,()=>{
    console.log("server is connected to 8080")
})