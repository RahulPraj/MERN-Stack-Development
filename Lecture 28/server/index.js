const express = require('express'); //function
const app = express();//object

// console.log(app);

//server connection
// app.listen(8080, ()=>{
//     console.log("server is connected at port 8080.")
// })
//middleware
// app.use(function (){})

//arrow function consider 3 arrguments
// app.use((req,res)=>{
//     console.log("middlewaree hun me")
//     res.send('hi string');
//     // res.send("<h1>hi string in tage</h1>");
// })

//next is a function
// app.use((req,res, next)=>{
//     console.log("middlewaree hun me")
//     res.send('hi string');
//     // res.send("<h1>hi string in tage</h1>");
//     next(); //aagle middleware ko hit krdo 
// })

//if usye middleware nhi mila to req to krdi hai next se to vo check krega ki slash match kr raha hai dusare path se to get pr jayega and wo chalega

// app.get('/', (req, res)=>{
//     console.log('hi i amget');
//     res.send('get request bhej di');
// })


// ---------------------path optional parameter-----------
// app.use('/cat',(req,res)=>{
//     console.log("middlewaree hun me")
//     res.send('hi string');
//     // res.send("<h1>hi string in tage</h1>");
// })


// app.get('/', (req, res)=>{
//         console.log('hi i amget');
//         res.send('get request bhej di');
//     })
// app.listen(8080, ()=>{
//     console.log("server connected");
   
// })