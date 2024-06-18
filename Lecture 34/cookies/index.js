const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser') //cookies ko require


// app.use(cookieParser()) //normal cookie

// signed cookie middlware , paas any random string
app.use(cookieParser('youneededabettersecret'));

// signed cookies
app.get('/', (req, res)=>{
    console.log(req.cookies);
    // res.send(req.cookies); // to see all cookies accept signed
    res.send(req.signedCookies); //see all signed cookies only
    // res.send("connected")
})

app.get('/signedcookies', (req,res)=>{
    res.cookie('bindas', 'rahul prajapati', {signed:true});  //bydefault signed is false. 
    res.send('cookie set successfully')
})



// normal cookies

// app.get('/', (req, res)=>{
//     res.send("connected")
// })

// set the cookies -> cookies bheja ka server , server means response
// app.get('/setcookie',(req, res)=>{
//     //store cookies
//     res.cookie('mode' ,'dark'); //key value
//     res.cookie('location', 'delhi');
//     res.cookie('username', 'rahul');
//     res.send('server sent cookies')
// })



// // to see the cookies
// app.get('/getcookies', (req, res)=>{
//     // destructing all the cookies
//     let {mode, location, username} = req.cookies;
//     res.send(`my name is ${username} and i stay in ${location} and mu fav theme is ${mode}`);
// })



app.listen(8080, ()=>{
    console.log("server is connected to : 8080");
})