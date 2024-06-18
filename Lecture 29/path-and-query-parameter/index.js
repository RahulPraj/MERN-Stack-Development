const express = require('express');
const app = express();

app.get('/',(rew, res)=>{
    res.send("root route is connected");
})

// subreddit or path parameter
app.get('/r/:rahul',(req, res)=>{
    // console.log(req.params);
    let {rahul} = req.params; //object distructuring
    res.send(`<h1>my route was ${rahul}</h1>`);
})


// query paramter
app.get('/search' , (req,res)=>{
    console.log(req.query);
    let {search} = req.query;
    res.send(req.query);
    res.send(req.query.search);
    res.send('query mil gyi')
})

app.listen(8080, ()=>{
    console.log("server is connected");
})