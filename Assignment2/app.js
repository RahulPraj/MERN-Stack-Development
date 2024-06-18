// let ans2 = (24 - 22 * 3) / (12/2) - 55 + 42
// console.log(ans2);
//  output -20

// 2.
// let score = 100;
// let ans = score == 100;
// console.log(ans); //true

// let score2 = 1;
// let ans1 = score2 == "1" //general 
// let ans2 = score2 ==="1" //strict
// console.log(ans1) //true
// console.log(ans2) //false

// function add(num1 , num2=123){ ///parameter
//     console.log(num1)
//     console.log(num2)
//     console.log(num1+num2)
// }




// add(14); // argument
// add(14 , 23); // argument

//3.
// let kuchbhi2 = {
//     a : 10,
//     b : 20,
//     c : "true",
//     fn : function (){
//         return("i am doing adavance js");
//     }, 
// totalMarks: function( )
//     {
        
//         return this.dsa + this.web;
//     }
// }

// let ans1 = kuchbhi2.fn();
// console.log(ans1);

// let ans = kuchbhi2.totalMarks();
// console.log(ans);

// 4.
// let arr = [10,20,[100,[2001,2002,2003], 300], null, undefined, "sam"];

// console.log(arr[2][1][1]);//2002

//5.
// let naam2 = "                samarth          ";
// let ans = naam2.trim();
// console.log(ans);
// console.log(naam2.length);

// 6.

// let obj = {
//     first : 'rahul',
//     last : 'prajapati',
//     age: 22,
//     favColor : 'white',
//     isMale : true
// }


// for(let item in obj)
// {
//    console.log(item)  
//    console.log(obj.item)  
//    console.log(obj[item]); 
// }

//7.
// var a = 10;
// var b = 10;
// console.log(a); //10

// function sam(){
//     var c = 20;
//     console.log(c); //20
// }
// sam();
// console.log(b) //10

//8.
// let x = 10;
// console.log(x); //10
// function a(){
//     x=100;
//     console.log(x); //100
// }
// a();
// x=1000;

// 
let a = 10;
function b(){
    console.log(a); //10
    function c(){
        console.log(a) //100
    }
    return c;
}

let c = b(); 

a=100; 

c();

console.log(a);//100