const mongoose = require("mongoose");

const Quotes = require("./models/Quote");


let dummyArray = [
    {
        author:"Rahul",
        text: "helllo from rahul "

    },
    {
        author:"Mahatma Gandhi",
        text: "you must be the change you wish "

    },
    {
        author:"indian",
        text: "mera bharat mahan"

    },
]

async function seedDB(){
    await Quotes.insertMany(dummyArray);
    console.log("db connected successfully");
    

}

module.exports = seedDB;