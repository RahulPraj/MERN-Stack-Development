const express = require('express');
const app = express();
const path = require('path');
// requiring methodoverride
const methodOverride = require('method-override');

//set ejs
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public'))) //middleware

// req.body show data bydefault undefined
app.use(express.urlencoded({extended:true})) // its a middleware

// uuid -> unique id
const { v4: uuid } = require('uuid');



// middleware
app.use(methodOverride('_method'))

// dummy array instead of db.
let comments = [

    {
        id :  uuid() , 
        author : "Samarth",
        comment: "backend is easy"
    },
    {
        id :  uuid() , 
        author : "Priyanshu",
        comment: "kavita meri didi hai"
    },
    {
        id :  uuid() , 
        author : "Harshil",
        comment: "one note nhi dikhra"
    },
    {
        id :  uuid(), 
        author : "Tavneet",
        comment: "populate samjha do"
    },

    
]


app.get('/',(req, res)=>{
    res.send('root route set')
})

// task1 -> to display all the blogs

app.get('/blogs',(req,res)=>{
    res.render('index',{comments});
})

// task2 -> show just a form for adding new blog
app.get('/blogs/new',(req, res)=>{
    res.render('new'); //no slash is given because we just rendering the page
})

// task3 -> actually adding blog in db
app.post('/blogs',(req, res)=>{
    // console.log(req.body);
    // distructuring
    let {author, comment} = req.body;
    comments.push({author, comment, id: uuid()});
    // redirect me get request lag rahi hai jis page pr jana hai
    // here we give the path of that page with /page name
    res.redirect('/blogs');
})


// task4 -> show a particular blog 
// here subredit is used so we see data on req.params
app.get('/blogs/:id',(req, res)=>{
    // console.log(req.params);
    let{id} = req.params;
    // to find a particular id we use method called find()
    // id check krega ki comment.id se match ho raha hai ya nhi
  let foundComment =   comments.find(comment => comment.id == id);
    //   render the page foundcomment
    res.render('show', {foundComment});

})


// task5 -> show edit form of one blog
app.get('/blogs/:id/edit',(req,res)=>{
    let {id} = req.params;
    let foundComment =   comments.find(comment => comment.id == id);
    //   render the page foundcomment
    res.render('edit', {foundComment});
})


// task6 -> update the edit blog
app.patch('/blogs/:id',(req, res)=>{
    let {id} = req.params;
    let foundComment =   comments.find(comment => comment.id == id);
    // console.log(req.body);
    let {comment} = req.body;
    foundComment.comment = comment; //changing already present data to newly calc data
    res.redirect('/blogs')

})


// task7 -> delete a particular blog from db
app.delete('/blogs/:id',(req, res)=>{
    let{id} = req.params;
    // here we use filter method to delete particular blog
    let newArray = comments.filter((item)=>{return item.id != id})

    // purane array (comment) ko newarray se replace krna hai
    comments = newArray;
    res.redirect('/blogs');


})




app.listen(8080, ()=>{
    console.log('server is connected at 8080');
})

