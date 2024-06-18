//----------normal-function--------------

// function sum(a,b){
//     return a+b;
// }

// let ans = sum(2,7);
// console.log(ans);


//---------arrow-function--------
//we dont write function keyword and function name i arrow function
//we take variable to call the function

// let sum = (a,b) => {
//     return a+b;
// }

// let ans = sum(2,7);
// console.log(ans);


//---ways to write arrow function--------


//--------way-1---------------
//when we have single return statement then we can ignore writing the return keyword as well as {} brackets

// let sqr = (num) => num*num

// let ans = sqr(2);
// console.log(ans)


//---------way-2--------------
//we also ignore the() around the arrgument


// let sqr = num => num*num

// let ans = sqr(2);
// console.log(ans)

// --------------------
// let rect = (a,b) =>{
//   return  
// }

// ---------------------
//first-class functions
// let sam = function (){
//     console.log("i am first-class function");
// }

// sam();


// spread operator
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];

// console.log(numbersCombined);

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  //Check the result object in the console:
  console.log(myUpdatedVehicle);