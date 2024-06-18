let em  = document.querySelector('em');

//parentElement
// we can select parent element
//strong is parent element of em tag
//we can go parent ke parent element par
//parent eak hi hota hai to we get  direct elemtn

// console.log(em.parentElement); //strong
// console.log(em.parentElement.parentElement); //p
// console.log(em.parentElement.parentElement.parentElement); // body
// console.log(em.parentElement.parentElement.parentElement.parentElement); //html


//children
//it return htmlcollection :- that is an array
//child  -> we have mutliple child to vo koyi bhi ho skta hai so we get array


let p = document.querySelector('p')

// console.log(p.children);
//array ke uper direct menupulation nhi kr skte hn
// console.log(p.children.children) //wrong

// console.log(p.children[0].children)


//nextElementSibling ->apne sibling ko interact karna

//adjustce sibling hi ayega 

// console.log(p.nextElementSibling) //single sibling
// console.log(p.nextElementSibling.nextElementSibling) //do siblings

//previousElementSibling
console.log(p.previousElementSibling);