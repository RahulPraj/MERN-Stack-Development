//case-1
// higher order function -> a
// function a(b){
//     console.log("inside a")
//     b(); //callback function
// }

// function b(){
//     console.log("inside b")
// }
// a()
// a(b);
// OR
// a(function b(){
//     console.log("inside b")
// })


// ------------------------------------
// case-2
// function a(){
//     console.log('inside a');
//     function b(){
//         console.log("inside b");
//     }
//     return b;
// }
// let returnedAns = a();
// returnedAns();

// 
 function x(){
     var a =7;
     function y(){
         console.log(a);
     }
     return y;
 }
 var z =  x();
 console.log(z);
 z();
 

//  
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());

// 
let sam = 10;

function fun(){
    let a = "Iranman";

    function innerFun(){
        console.log(baba)
    }

    return innerFun;
}

let returnedValue = fun();
returnedValue();

// real life example of hof

function getboolean(item){
    return typeof item === 'boolean';
}

function getstring(item){
    return typeof item === 'string';
}

function getnumber(item){
    return typeof item === 'number';
}

// this is high order function
function get(array, fn){
    let result = [];
    for(let item of array){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}

let arr = ["rahul","prajapati","male", 16, 5, 2002, true, false, true]

console.log(get(arr,getboolean));
console.log(get(arr,getstring));
console.log(get(arr,getnumber));