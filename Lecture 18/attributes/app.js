//1.getAttribute

// let anchor = document.querySelector('a');
// //attribute- href
// console.log(anchor.getAttribute('href'));
// //attribute - class
// console.log(anchor.getAttribute('class'));


//2.setAttribute

// let anchor = document.querySelector('a');
// anchor.setAttribute('href', 'http://facebook.com');


//real world use case 
//here the class we using is not present in h1 we gave the class name in css style

let h1 = document.querySelector('h1')
h1.setAttribute('class', 'head');