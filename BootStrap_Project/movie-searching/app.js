let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('ul');

btn.addEventListener('click',function(){
    searchedText = input.value;
    input.value = ''
    fetchApi(searchedText);

})

function fetchApi(searchedText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchedText}`)
    .then(function(res){
        // console.log(res.data);
         manipulateDom(res.data)
    }).catch(function(err){
        console.log(err.data)
    })

}

//data ko manipulate with help of js
function manipulateDom(datas){
    while(list.firstChild){
        list.firstChild.remove(); //remove kr rahe hai last search
    }
    for(let item of datas){
        // console.log(item);

        let figure = document.createElement('figure');
        figure.innerHTML = `
        <img src= ${item.show.image.medium} alt= "" />
        <h2>${item.show.name}</h2>
        <h5>${item.show.rating.average}</h5>`

        list.appendChild(figure)
      
    }
}