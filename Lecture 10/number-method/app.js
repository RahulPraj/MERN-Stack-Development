// console.log(Math); //its an object


console.log(Math.PI);
console.log(Math.floor(3.3)); //it give 3
console.log(Math.ceil(3.3)); //it give 4
console.log(Math.round(4.6));

console.log(Math.abs(-100));

//to find random number from[0-1)range , 0 is inclusive and 1 is exclusive
// random number [7,31]
console.log(Math.floor(Math.random()*25 + 7));

// generate random OTP of 6 digit [100000, 999999] => 899999 + 1 => 900000
console.log(Math.floor(Math.random()*900000 + 100000));