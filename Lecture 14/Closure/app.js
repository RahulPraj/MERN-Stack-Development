
function fun(){
    let naam = "rahul";
    function printfun(){
        console.log(naam);
    }
    return printfun;
}

let ans = fun();

ans();


// output
// rahul






// -----------------------

// console.log(a);
// let a = 10;
// function b(){
//     console.log(a);
//     function c(){
//         console.log(a)
//     }
//     c()
// }

// b();


// ------------------------

// let a = 10;
// function b(){
//     console.log(a);
//     function c(){
//         console.log(a)
//     }
//     return c;
// }

// let c = b(); 

// // a=100; 

// c();

// console.log(a);


// real use 

// function counter(){
//     let count = 0;

//     return {
//         getcount: function(){
//             return count;
//         },

//         increment: function(){
//            return count += 1;
//         },

//         decrement: function(){
//             return count -= 1;
//         }



//     }
// }

// let counter1 = counter();
// console.log(counter1.getcount()); //0
// counter1.increment(); //1
// counter1.increment();//2
// console.log(counter1.getcount()); //2
// counter1.decrement(); //-1
// console.log(counter1.getcount()); //1



let a = 10;
function outer() {
  let b = 10;
  function innner() {
    console.log("hello test kesa hai");
    console.log(a);
    console.log(b);
  }
  return innner;
}
let d = outer();
d();