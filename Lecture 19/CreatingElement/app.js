//i can creat a new tag/element(adding) -> creatElemt()
//its a method
//we can creat any tag jo html me exsist hota hai

//step1 - create
let p = document.createElement('p') //us element ko creat krdega
let h3 = document.createElement('h3');
let h1 = document.querySelector('h1');

//step2- fill the tag
p.innerText = 'h1  i am rahul'
h3.innerText = 'h3 new'

//dom me insert krna hai

//1.appendchild() -> method

//h1 ke under p tag append krdo 
//it will act like h1 it will give same size and font
//appendchild ke liye parent ko select krna zaruri hai
//it accepts html only
// h1.appendChild(p);
// h1.appendChild(h3);
//we cannot give mutiple arrgument.
//  h1.appendChild(h3, p);
// h1.append('i am the boss'); //text -> error


//2.append() 
//it select mutliple child
//it accepts the html and text
// h1.append(p, h3);
// h1.append(h3 , h3) ; //dekhna padhega
// h1.append(p, h3,'i am the boss'); //text

//3.prepend()
//h1 se pehle add karega
//we can do multiple 
//it accepts the html and text
//  h1.prepend(h3);
//work as same as append
//  h1.prepend(h3, p);
// h1.prepend(h3, p,'i am the boss');

//4.before() 
//element se pehle add hua hai , it goes as a sibling
//ye h1 element ke under nhi usye pehle jata hai
//child ke under nhi jata
// h1.before(p);

//5.after()
//multiple values ja skta hai
//h1 ke niche add hoga uske under nhi

// h1.after(p);

//remove() -> remove element