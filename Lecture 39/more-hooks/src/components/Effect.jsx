import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Effect() {
    let [data, setData] = useState("");

    let[count, setCount] = useState(0);

    useEffect(function(){ //first function can't be async function, 
      // uske under kisi bhi function ko mana skte hn
        axios.get(" https://api.tvmaze.com/search/shows?q=girls")
        .then(function(res){
            console.log(res, "sam");
            // console.log(count);
            setData(res);
        })
    }, [count]
    )
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>Click -{count}</button>
        api - {JSON.stringify(data)}
    </div>
  )
}

export default Effect