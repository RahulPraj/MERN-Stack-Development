//type of This Keywords
//this kisko point kar raha hai ye decide hoga aapki function calling / invokation se
//in case of broswer the global object is window object

//typ1-1

//----regular function invokation-----
//in this keyword is point to the fun1 and its pointing directly to the window object

// function fun1(){
//     console.log(this);
// }

// fun1(); 


//type-2

//------Object /method invokation-----
//in this keyword is pointing on object over which it is called

// ----------example-1-------------
// object invokation
// let obj = {
//     a:10,
//     fn: function(){
//         console.log(this);
//     }
// }

// obj.fn(); //this pointing to the obj


// -----example-2----------
// let obj = {
//     Number: 20,
//     fn: function(){
//         console.log(this);
//     }
// }

// let myfun = obj.fn;
// myfun(); //in this case it directly point to the window object because myfun() is showing regular function invokation


// ------example-3---------

// let obj = {
//     fn: function (){
//         function calculate(){
//             console.log(this);
//         }
//         calculate();
//     }
// }

// obj.fn(); 
//in this case this point to the window object because when we entered in function 1 it will go to function2 where this keyword is pointing to the 
//calculate() and it will showing regular function invokation


//type-3

//--------Constructor function invokation----------
//in this keyword always point to the newly created object

// function CreatObj(){
//     this.a = 20;
// }

// let obj = new CreatObj();
// console.log(obj);


//type-4

//-------Indirect invokation------------
// it has three methods
//call()
// let obj = {
//     a:100,
//     fn:function(a,b,c){
//         console.log(this , a , b, c)
//     }
// }

// let obj2 = {
//     b:20
// }

// obj.fn();//right
// obj2.fn(); //wrong-> we  cant invoke fn() in obj2

//so we use call()

// obj.fn.call() //->it will point the window if we dont pass any argument
// obj.fn.call(obj2) //-> in this keyword is pointing to obj2 , means obj2 reference kr raha hai obj ke fn me this ko

//we can pass multipke arrgument by (,) koma seperated
// obj.fn.call(obj2 , 10 , 20 , 30)

//apply()
//it do the same work like call()
// obj.fn.apply(obj2 )

//in this arguments are pass in array form
// obj.fn.apply(obj2 , [10 , 20 ,30])



//bind() -> it does not run/call the function , it creats the new copy of the function
// let obj = {
//     a:100,
//     fn:function(a,b,c){
//         console.log(this , a , b, c)
//     }
// }

// let obj2 = {
//     b:20
// }

// let ans = obj.fn.bind(obj2 , 10 , 20 , 30);
// let ans = obj.fn.bind(100 , 10 , 20 , 30);
// console.log(ans)

// ans();

//----ques
// let obj = {
//     a:100,
//     fn:function(){
//         console.log(this);
//     }
// }
// let final = obj.fn;
// final();


//type-5 

//----arrow function-----
// in case of arrow function this keyword will depend on parent ka this


// let ans = ()=>{
//     console.log(this);
// }

// ans();
// ---------------

// let obj = {
//     a:100,
//     fn: ()=>{
//         console.log(this)
//     }
// }

// obj.fn();

//------example-2----------

// let obj = {
//     a:100,
//     fn: ()=>{
//         // console.log(this);
//         let fun = ()=>{
//             console.log(this);
//         }
//         fun();
//     }
// }

// obj.fn();

//-----------------example 3------------
// let obj = {
//     a:100,
//     fn: ()=>{
//         console.log(this);
//         function sam(){
//             console.log(this);
//         }
//         sam();
//     }
// }

// obj.fn();