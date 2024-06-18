const express = require("express");
const app = express();
const quotesRoutes = require("./apis/quotesRoutes");
const mongoose = require("mongoose");
const seedDB = require("./seed");
const cors = require('cors')

 


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/gian')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})

app.use(cors({
    origin: ["http://localhost:5173"],
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("welcome to backend")
})

// seedDB()
app.use(quotesRoutes);





let PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`server is connected at ${PORT}`);
})
