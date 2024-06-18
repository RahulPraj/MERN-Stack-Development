let todo = {
    title: "Go to GYM and 100 pushups maare",
    desc: function(){
        // return `ram ram sareya na aaj humne ${todo.title}`
        return `ram ram sareya na aaj humne ${this.title}`
    }
}

// console.log(todo);
// // console.log(todo.title);
// // console.log(todo.desc());
// console.log(todo.toString());  //fallback source -> prototypes
// // console.log(todo.samarth); //undefined
// // console.log(todo.samarth()); //
// console.log(todo.__proto__); //Object.prototype(parent)
// console.log(todo.__proto__.__proto__); //null(parent of Object.prototype)

let arr = [10,20,30,40,50]

console.log(arr);
// console.log(arr.__proto__);