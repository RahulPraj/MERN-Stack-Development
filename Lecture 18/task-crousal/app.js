let arr = ['https://images.unsplash.com/photo-1694406805270-f3a93e91f4b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1695063536714-827da66eeb65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1695607379409-bfa72abf6afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1695392689359-de22b1cbb9e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1695193984598-2cbfd23c6b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60']


let count = 0;

let imgg = document.querySelector('img');
//it repeat a task again and again
let id  = setInterval(() => {
    imgg.setAttribute('src', arr[count]);
    count = (count+1) % arr.length;


}, 2000)            

setTimeout(() =>{
    clearInterval(id);
    imgg.setAttribute('src', '')
}, 10000)