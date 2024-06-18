// String-method = string is not a  method but everything in js is object

//length property -find length of string



// length

// let  naam = "rahul"
// console.log(naam.length)
// console.log(naam.length()) //-> wrong

//------------------------------------------
//toUpperCase() -> its a method
// console.log(naam.toUpperCase());


//------------------------------------------------
//toLowerCase() -> convert captial letter into small

// let naam1 = "PRAJAPATI"
// console.log(naam1.toLowerCase());


//--------------------------------------------
//trim() -> it remove extra spaces from string
let naam2 = "                samarth          ";
let ans = naam2.trim();
console.log(ans);
console.log(naam2.length); //its include extra space to give the length of string


//-------------------------------------------------
//includes() -> boolean type return its check if character present in string or not 
console.log(naam2.includes('r'))
console.log(naam2.includes('pa'))
console.log(naam2.includes('prajapati'))
console.log(naam2.includes('ua'))

