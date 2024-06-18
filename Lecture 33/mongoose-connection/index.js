const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cheerz')
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{
    console.log(err)
})

app.listen(8080,()=>{
    console.log("server is connected at port 8080")
})