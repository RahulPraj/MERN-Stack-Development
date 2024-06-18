// let arr = [] ; //empty array

// console.log(arr);

// //homogenous array 

// let arr1 = [12, 14, 16,20,22 ] // wrong


//hetrogenous array -> different type of primitve data types 
// 1D array
let arr1 = [12, 30, 40, true, false, undefined, null, "rahul"];

// console.log(arr1);
// console.log(arr1[4]);

// 2D array
// let arr = [10,20,[50,60,100], "sam", undefined];

// 3D  array
let arr = [10,20,[100,[2001,2002,2003], 300], null, undefined, "sam"];

console.log(arr[2][1][1]);//2002











//Arrays Method

//1] push() ->  add at the end , array ke last me daal do


let arr2 = [10, 20, 30 ,'sam',40, true]
// arr2[6] = 50;
// console.log(arr2);

// ------------------------
// arr2.push(true);
// console.log(arr2);

 //------------------------
// arr2.push(60,70, 'raju' )
// console.log(arr2)

//------------------------
//its function will return the length of the array after adding the value at th end
// let ans1 = arr2.push(50,80,false)
// console.log(ans1)


//2] pop() -> remove element  from last of the array , it will not take arrgument


//-------------------------
// arr2.pop()
// console.log(arr2)

// ---------------------------
//its function will return the removed value
// let ans2 = arr2.pop()
// console.log(ans2)



// ----------------------------------------------------------------

//shift() -> it will remove element from the starting of array

// arr2.shift()
// console.log(arr2);


//----------------------
//its function will return the value of removed from starting

// let ans1 = arr2.shift()
// console.log(ans1)


//unshift() -> it will add the value in the starting index of array
// arr2.unshift(5);
// console.log(arr2);

// let ans = arr2.unshift(5);
// console.log(ans);