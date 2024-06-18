// let btn = document.querySelector('#btn');

// 1.way -> html ke under hi kardiya
// function doSomething(){
//     console.log('hello'); //print the object in string fomr
// }

// console.dir(btn); //shows all the details of thatr object

// //2.way ->  define in js  
// btn.onclick  = () =>{
//     console.log('hello sbko')
// }

// mutliple function 
// function one  () {
//     console.log('hello sbko')
// }
// function two() {
//     console.log('hello sbko2')
// }
// btn.onclick  = one;
// btn.onclick  = two; //it will run this fun only
//so in onclick event only one task is done.
//so solve this problem we use eventListener.
//3. way addEventListen
//it takes two argument
//click -> task kya perform
//reaction -> kam kya ho raha hai

// btn.addEventListener('click', function(){
//     console.log('hello');
// } )

//difference btw 2 way and 3 way

//consle.dir() -> saari property show krta hai jo button me hai
//2.way it will point at one function at a one time
//function override krdega
//eak button dabane se eak kam ho 
//it will allow on function

// function icecream(){
//     console.log('hello icecream')
// }

// function gulabjamun(){
//     console.log('hello gulabjamun')
// }

// btn.onclick =icecream;
// btn.onclick = gulabjamun; //because of flow of code ye show hoga


//3.way
//multiple events ko allow krta hai
//it will not override the function

// btn.addEventListener('click', icecream)
// btn.addEventListener('click', gulabjamun)


//example -> body ka color red krna hai

 let btn = document.querySelector('#btn');

 let bodyEl = document.querySelector('body');
//  btn.addEventListener("click", function(){
//     // document.body.style.backgroundColor = 'red'
//      bodyEl.style.backgroundColor = 'red'

//  })

