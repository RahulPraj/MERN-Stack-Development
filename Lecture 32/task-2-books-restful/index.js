const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')

 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
// middleware of public folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})) // its a middleware
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// db
let books = [
    {
        id: 0,
        title: "harry potter",
        genre: "fantasy drama ",
        units: 10

    },
    {
        id: 1,
        title: "Avenger",
        genre: "fantasy action ",
        units: 5

    },
    {
        id: 2,
        title: "romeo and juliet",
        genre: "romance ",
        units: 1

    },
    {
        id: 3,
        title: "the flash ",
        genre: "fantasy action thriller ",
        units: 8

    },

]

app.get('/', (req, res)=>{
    res.send("root route set");
})

// task1 -> show all the books 
app.get('/books',(req, res)=>{
    res.render("index",{books})
})

// task2 ->create form for new bog
app.get('/books/new', (req,res)=>{
    res.render('new');
})

// task3 -> add data to a db
app.post('/books',(req,res) =>{
    let {title, genre, units} = req.body;
    books.push({title, genre, units, id: books.length})
    res.redirect('/books');
})


// task4 - show particular book
app.get('/books/:id',(req,res)=>{
    let {id} = req.params;
    // console.log(req.params);
   let newBook =  books.find(item => item.id == id);
//    console.log(newBook);
   res.render('show',{newBook});
  
})

// task 5-> edit form of articular book
app.get('/books/:id/edit', (req,res)=>{
    let {id} = req.params;
    let newBook =  books.find(item => item.id == id);
    res.render('edit',{newBook})
})

// task-6 -> update a particular book
app.patch('/books/:id',(req, res)=>{
    let {id} = req.params;
    let newBook =  books.find(item => item.id == id);
    let {units} = req.body;
    newBook.units = units;
    res.redirect('/books');
})

// task7 -> delete particular book
app.delete('/books/:id',(req, res) =>{
    let {id} = req.params;
    let  newArray = books.filter((item) => {return item.id != id})
    books = newArray;
    res.redirect('/books')
})

app.listen(8080, ()=>{
    console.log("server is connected");
})