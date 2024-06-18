const express = require('express');
const app = express();
const session = require('express-session') //require session


// middleware
app.use(session({
    secret: 'keyboard cat', //secret key can be any thing
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true } //it handle the security
  }))


app.get('/', (req,res)=>{
    res.send('welcome to session');
})

app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    }
    else{
        req.session.count = 1;
    }
    res.send(`you visit the site ${req.session.count} times`)
})

// set session
app.get('/setname',(req,res)=>{
    req.session.username = 'rahul ';
    res.redirect('/greet');



})

app.get('/greet',(req,res)=>{
    let{username = "anonymous"} = req.session;
    res.send(`hi from ${username}`);
})

app.listen(8080, ()=>{
    console.log("server is connected to : 8080");
})