//file2
let sam = require('./index')

console.log(sam);//{}

// console.log(sam.pii)
// console.log(sam.addd(2,4))
// console.log(sam.sqrr(5))

// ---------------------------

// way2= destructuring

// let sam = require('./index')

// let {pi, add, sqr} = sam;

// or

// let {pi, add, sqr}= require('./index')

// console.log(pi);
// console.log(add(2,4));
// console.log(sqr(3))

// change name of key
// let {pi:hello, add, sqr}= require('./index')

// console.log(pi); //this will give error because name is change
// console.log(hello);
// console.log(add(2,4));
// console.log(sqr(3))

//we can require anyrthing
// let str = require('./index')
// console.log(str);