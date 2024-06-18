let arr = [10, 20, 30, 40 ,50]

//for-of ->it is used for ordered data structure -> array
//item -> is a variable which is a iterator

// for(let item of arr){
//      console.log(item);
// }

//object are unordered
//it will give error
// for(let item of obj){
//     console.log(item);
// }

//for-in ->it works on unordered data structure -> object
let obj = {
    first : 'rahul',
    last : 'prajapati',
    age: 22,
    favColor : 'white',
    isMale : true
}


for(let item in obj)
{
   console.log(item)  
   console.log(obj.item)  
   console.log(obj[item]); 
}