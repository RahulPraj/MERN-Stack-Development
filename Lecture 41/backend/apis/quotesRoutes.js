const express = require("express");
const Quotes = require("../models/Quote");
const router = express.Router();

router.get('/allquotes',async (req,res)=>{
    try{
      let allQuotes =  await Quotes.find({});
      res.status(200).json(allQuotes);
    }
    catch(e){
        res.status(400).json({msg:"something went wrong"});
    }
});


router.post('/addquotes',async (req,res)=>{

    try{
        let {author, text} = req.body;
      let newQuote = await  Quotes.create({author, text});
    //   console.log(newQuote, "newQuotes")
      res.status(201).json({msg:"new quote created successsfully"})
    }
    catch(e){
        res.status(400).json({msg:"something went wrong"});
    }
})

module.exports = router;