// //1.xmlhttp
// let req = new XMLHttpRequest();
// //API -> 

// //FOR REQUEST -> CREATE A RELATIONSHIP BTW SERVIER AND CLIENT
// //its a method.
// req.open('GET','https://api.tvmaze.com/search/shows?q=girls') //data chahiye url se WE give get to get data
// //it will tell ki ready rahiyo


// //send will give request to the api
// req.send();
// console.log(req);

// //it will load the data if its working
// req.onload = function(){
//     // console.log(this.response) ; //this will point to the req obj
//     console.log(JSON.parse(this.response)) 
// }

// //it will give error if something went wrong
// req.onerror = function(){
//     console.log(this.response);
// }

// --------------------------------------------------------
// // 2.Fetch() -> its a web api. it is given by browser.
// // it returns a promise
// fetch('https://api.tvmaze.com/search/shows?q=girls') //get by default hota hai
// .then(function(data){
//     console.log(data);
//    return data.json(); // saare data ke ana ka wait karega. 
//     //when json get all the data it also return the promise

// }).then(function(res){
//     console.log(res); //we get all the data . json ke parse format me. that is json format
// })

// .catch(function(err){
//     console.log(err)
// })

// ----------------------------------------------------
// 3.Axios-> it also return a promise
//data small small packets me nhi militta , direct sara data mil jata hai first promise
axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(res){
    // console.log(res) //its a masive object jisme eak data naam ka bhi hai.
    console.log(res.data); //obj ke under obj
}).catch(function(err){
    console.log(err)
})
