//3 properties of html

//these all properties are used to get data or text so we call as getter means get the data
//1.innerText -> it gives the text inside the tags
//it under stand the css and give output according to css

// let para  = document.querySelector('p')
// console.log(para.innerText);

//2.textContent -> it also give the text inside the tags
//but it doesnt understand the css and it give all text

// let para1  = document.querySelector('p')
// console.log(para1.textContent);


//3.innerHtml -> it give all the tags and text including css

// let para3  = document.querySelector('p')
// console.log(para3.innerHTML);





//we also set the data means change in data called as setter
//innerhtml


let para3  = document.querySelector('p')
//they are acting like getters
console.log(para3.innerHTML);

//they are acting like setter
para3.innerHTML = "i am great what about u"