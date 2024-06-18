// let h1 = document.querySelector('h1');

//in general
// h1.setAttribute('id' , 'sam');
// h1.setAttribute('class' , 'sam');
// h1.setAttribute('class', 'sarif harshil yuvi');//not effactive 
// h1.setAttribute('class', 'sarif', 'harshil', 'yuvi');//wrong way


//classlist -> automatically understand working with class

//1. add()

let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// p.classList.add(yuvi) //worng

// p.classList.add('yuvi')
// p.classList.add('harshil')
// p.classList.add('sarif')

//alternative way 
// h1.classList.add('yuvi harshil sarif') //single class -> wrong approch  

 p.classList.add('yuvi','harshil','sarif', 'sam')//mutliple -> better approach


//2.remove()
//p.classList.remove('harshil');
//p.classList.remove('harshil  sarif') ; //string matching nhi ho rahi which is wrong

//p.classList.remove('sam','sarif'); //mutliple removing


//3.toggle() -> return booelan value
// -> aagr hoga to remove hojayega, nhi hoga to add krdega
//eak class ko eak baar hi lagate hn  mutiple arguments not beahaves the way it behave in add or remove
//toggle behaves like not operator

 p.classList.toggle('yuvi');
 //true
 p.classList.toggle('yuvi');
 //false


//4.contains() ->return boolean value
//if class nhi hai to false dega
//if class hogi to true dega
//it takes mutiple arguments
//it neglact , seperated
//pehli check krta hai next arguments ko ignore kardeta hai
//pehla argument check hoga
//it works at or operator

 p.classList.contains('yuvi');//true 
 p.classList.contains('sam')//false -> remove kra hai to present nhi hogga
// p.classList.contains('sarif','yuvi','harshil')

