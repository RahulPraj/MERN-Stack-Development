
// var a = 10;
// var b = 10;
// console.log(a);

// function sam(){
//     var c = 20;
//     console.log(c);
// }
// sam();
// console.log(b)


// let x = 10;
// console.log(x);
// function a(){
//     x=100;
//     console.log(x);
// }
// a();
// x=1000;

// let x;
// function b(){
//     console.log(x);
// }
// b();
// x=2;


let a = 10;
function b(){
    console.log(a);
    function c(){
        console.log(a)
    }
    return c;
}

let c = b(); 

a=100; 

c();

console.log(a);