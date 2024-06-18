//how to write function 

//syntax

// function defination
// function pappu(){
//     console.log("pappu paas hogiyaa")
// }

// func calling
// pappu();
// pappu();
// pappu();


// -----------------------



// --------- parameterised functions -----------

// function add(let num1 , let num2){ -> wrong

// function add(num1 , num2){ ///parameter
//     console.log(num1)
//     console.log(num2)
//     
//     console.log(num1+num2)
// }


// // add(4 , 5); // argument
// // add(14 , 35); // argument


// function add(num1 , num2){ ///parameter
//     console.log(num1)
//     console.log(num2)
//     console.log(num1+num2)
// }

//as we didnt pass the argument value of num2 it will get undefined from js engine for num2

// add(14); // argument

// ------------------------------------

// default parameterised functions -------------

// function add(num1 , num2=123){ ///parameter
//     console.log(num1)
//     console.log(num2)
//     console.log(num1+num2)
// }




// add(14); // argument
//add(14 , 23); // argument

//undefined -> the value which is declared but not define
// ----------
// NaN is not a number 
// the typeOf NAN is a number
// when nothing is return from a number js point that number to the undefined
function add(n1, n2, n3, n4){
    let out = n1 + n2 +n3;
    console.log(typeof out);
    // return n1 + n2 + n3 + n4;
}

add(10,20,30);