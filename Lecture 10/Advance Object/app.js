// let kuchbhi = {
//     a : 10,
//     b : 20,
//     c : "true",
//     fn : function sam(){
//         console.log("i am doing adavance js");
//     }
// }

// console.log(kuchbhi);
// console.log(kuchbhi.a);

//printing function -> here we use fn because fn is key of the function
//this will print undefined also because function always return the function but in this we printing the function
// console.log(kuchbhi.fn()); 


 //-------------------------------

//  let kuchbhi1 = {
//     a : 10,
//     b : 20,
//     c : "true",
//     fn : function sam(){
//         return("i am doing adavance js");
//     }
// }

//calling function -> undefined show nhi hoga because its a return function
// let ans = kuchbhi1.fn();
// console.log(ans);

//--------------------------------

//not important to give function name in object because we use key to call the function not the value
// let kuchbhi2 = {
//     a : 10,
//     b : 20,
//     c : "true",
//     fn : function (){
//         return("i am doing adavance js");
//     }
// }

// let ans1 = kuchbhi2.sam(); -> wrong we cant write function name
// console.log(ans1);

// let ans1 = kuchbhi2.fn();
// console.log(ans1);

//-----------------------------------
//if we want ki koyi mere object ko naa chaide

//we use object.freeze() -> its a method

// Object.freeze(kuchbhi2);
// kuchbhi2.c = 'false'; //it will not change 
// console.log(kuchbhi2);



//-----------------------------------------

//here we using a keyword called this

// let codingBlocks = {
//     dsa : 50,
//     web : 80,
//     totalMarks: function( )
//     {
        
//         return codingBlocks.dsa + codingBlocks.web;
//     }
// }

// let ans = codingBlocks. totalMarks();
// console.log(ans);

//in case of method whenever I use this keyword , the this will refer
//to the object inside which the method is defined
//here this is point the codingBlocks
//this keyword is a reserved keyword.
// this key word points to the object inside which method/ func is define.
let codingBlocks = {
    dsa : 50 ,
    web : 80 ,
    totalMarks : function(){
        // console.log(this);
        return this.dsa + this.web
    }
}

let ans = codingBlocks.totalMarks();
console.log(ans)