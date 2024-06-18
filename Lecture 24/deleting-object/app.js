// let obj = {
//     naam : "samarth",
//     age: 29
// }

// // console.log(obj)
// obj.favColor = "red"

// console.log(obj)

// delete obj.naam;

// console.log(obj)

// --------------------------------------------------

// 1.spread operator -> failana 
//old way
// let arr1 = [10,20,30]
// let arr2 = [40,50,60,70]

// let ans = arr1.concat(arr2)
// console.log(ans);

//new way -> ... (triple dot is called spread operator)
// let ans = [...arr1, 40 , 50, 60, 70];
// console.log(ans);

//let ans = [...arr1, ...arr2];
// console.log(ans);

//q1 -> object can also bhi spread and arrays


// let obj1 = {
//     naam: "rahul",
//     age: 22,
//     gender: 'male'
// }

// let obj2 = {
//     ...obj1,
//     favColor: 'white',
//     hobbies: 'gym'
// }

// console.log(obj2)

// -------------------------------------
//1.destructure -> destructuring done in both object and array
//eak baari me saari chije kr skta hai

// let courses = ['cpp', 'java', 'web', 'python']
// let myCourse = courses[1];
// console.log(myCourse);

//array ko destructure
// let [first, second, third, fourth] = courses;
// console.log(first); // return cpp
// console.log(third); //web

//kam chijo ko  bhi destructure kr skte hn
// let [first, second, third,] = courses;

//can i miss in between
// let [first, second, , fourth] = courses;

// console.log(first); //cpp
// console.log(fourth);//python

//we can skip multiple

// let [first, , , fourth] = courses;
// console.log(first);
// console.log(fourth);


//obj ko destructure krna 
//i case of obj we do destructure by using keys
//  let obj1 = {
//         naam: "rahul",
//         age: 22,
//         gender: 'male'
//     }


    // let {first, second, third} = obj1; //wrong
    // let {naam, age, gender} = obj1;
    // console.log(naam);
    // console.log(age);
    // console.log(gender);

    //oder me farak nhi padhega
    // let {naam, gender} = obj1;
    // console.log(naam);
    
    // console.log(gender);

    //kya kisi or naam se destructure nhi kr skte hn? -> no
    //but we can call by new name
    // let {naam:username, age, gender} = obj1;
    // console.log(username); //new name
    // console.log(age);
    // console.log(gender)

    //but we can excess old name
    // console.log(naam); //wrong

    // if hmare paas vo key nhi hai to undefined dena cahiye but hm uski jagha change kr rahe hn by default
    // let obj1 = {
    //     // naam: "rahul",
    //     age: 22,
    //     gender: 'male'
    // }

    // let {naam:username ='anonymus', age, gender} = obj1;
    // console.log(username); //new name
    // console.log(age);
    // console.log(gender)
