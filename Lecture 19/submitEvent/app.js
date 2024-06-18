//it will tricker when we submit form
//form ka default nautre is reload 
//form ka bydefault nature hota hai submit krne se refresh hota hai
//we can stop that behavior by using

let formEl = document.querySelector('form');
// let inp = document.querySelector("input")

formEl.addEventListener('submit', function(e){
    e.preventDefault(); //default nature rokna hai to event pr hogi
    // console.log(inp.value)//baar baar input select naa krna ho to we have different way

    console.log(formEl.children.value);
})