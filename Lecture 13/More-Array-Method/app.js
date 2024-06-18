// 1) for-each is a method and used to iterate on array
//it doesnt return anything
//for-each is HOF and parameters passed in it is callback function


let arr = [1 ,2, 3,4, 5]

// arr.forEach(function(item , index){

//     console.log(`${item} is at index:${index}`);
// })


// 2) map is a method and it also accept a callback function
//it return a entire new array with same number of elements
//present in the orginal array

// let newArray= arr.map(function(item){
//     return item*item;
// })

// console.log(newArray);

// 3) Filter is a method and it also accept a callback function
//it is used to filter out the truethy value (only true values)
//if values are not true the it give empty array
//it also return the newArray but it might not equal to the orginal array it can be lesser number as well
// it depend the true values

let newFilterArray = arr.filter(function(item){
    // if(item < 7)
    // {
    //     return true;
    // }

    if(item > 7) //it will give empty as the condition is not true
    {
        return true;
    }

    return false;
})

console.log(newFilterArray)