// Hoisting is a concept where we access our variable/functions 
// even before its deceleration is called hoisting
// hoisiting done in var, const and let.
// case-1
// console.log(a);
// myfun()

// function myfun(){
//     // var b = 10;
//     console.log('i am hero');
// }

// var a = 30;

// output will be
// undefined
// i am hero


// case->2
// DTZ -> Dead Temporal Zone is aphase between your MCP and CEP . in this phase js engine is aware about the variable existance
// but since the zone is dead you are not allowed those variable.
// dtz is present btw the mcp and cep. due to dtz we can access that variable.
// it happens in let and const.

console.log(a);
myfun()

function myfun(){
    
    console.log('i am hero');
}

let a = 30;