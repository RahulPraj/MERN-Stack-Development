//to get document on browser
//console.log(document); //pura ka pura html mil raha hai


//selctiong the element by using Id

//Id - selector 
//  let h1 = document.getElementById('india');

//  //always right id name with string
//  let k = document.getElementById(krish); // it will give null , its not the part of dom its a browser 
 
//  let p = document.getElementById('krish');


 //get element by tag Name

 let h1 = document.getElementsByTagName('h1');

//  // it act like array
//  //we can iterate over it
//  for(let item of h1){
//     item.style.color = 'green'
//  }

//  h1[0].style.backgroundColor = 'yellow'
//  h1[1].style.backgroundColor = 'blue'
//  h1[2].style.backgroundColor= 'green'


//get element by class name

















//type-4 query selector -> we can select id, class and tag selector
//  let h1 = document.getElementById('india');
//  let h1 = document.getElementsByTagName('h1');


// let elem = document.querySelector('#india')
// elem.style.fontSize = "100px";

// let elem1 = document.querySelector('h1')
// elem1.style.backgroundColor = 'red'

// let elem2 = document.querySelector('sam')
// elem2.style.fontSize ='48px';