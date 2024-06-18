//sytnax of object

// let person = {
//     // empty object
// }

//object is created having key : value
let person1 = {
    name : "rahul",
    age : 22,
    favColor : "white"
}

//print entire object
// console.log(person1);

//acces single property
// console.log(person1.name);
// console.log(person1.age);

//give object as array -> not possible
// console.log(person1[0]); //wrong

//we can excess our objects with keys
// console.log(person1['favColor']); -> right

//remember in case of object the keys are behind the screen is stored as strings
// console.log(person1[name]); -> wrong

//change the value of the key
// person1.favColor = 'black';
// console.log(person1);
// console.log(person1.favColor);

//adding new property
person1.gender = 'male';
console.log(person1);

//deleting the property
delete person1.age;
console.log(person1);

//