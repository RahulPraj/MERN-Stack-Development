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
// Create schema
let daaruSchema =new  mongoose.Schema({
    name: {
        type:String,
        trim: true,
        required: true
    },

    price: {
        type:Number,
        required: true
    },

    year: {
        type:Number
    },

    hasTried: {
        type:Boolean
    }


})

// create model
let Daaru = mongoose.model('Daaru', daaruSchema); //Daaru(model name) should be start with capital because its a js class and have singular  
// console.log(Daaru, 'model hai');

// model is js class -> objects ->db
let royalStag = new Daaru({name:"royal stag", price: 350, year: 1960, hasTried: false})
let blackDog= new Daaru({name:"black dog", price: 1500, year: 2000, hasTried: true})
// console.log(Daaru, "Newly added brand");

royalStag.save(); //db mei store krvana padhta hai alag se.
blackDog.save();

app.listen(8080,()=>{
    console.log("server is connected at port 8080")
})