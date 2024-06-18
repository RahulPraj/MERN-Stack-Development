// 
let pi = Math.PI
console.log(pi);

let add =  (a,b)=> a+b;
let ans1 = add(6,7);
console.log(ans1);


let sqr = (num)=> num*num
let ans2 = sqr(5)
console.log(ans2)


// exporting file

// ways of writing
// module.exports = {} //by default -> give empty object

// way2
module.exports = {pii:pi, addd:add, sqrr:sqr} //we can give key and value different name

// way3
// module.exports = {pi:pi, ad:add, sqr:sqr} //we can give same name to both



// module.exports = {pi, add, sqr} //if key value is same we can avoid writing {:value}

// we can export anything
// module.exports = "bro code"