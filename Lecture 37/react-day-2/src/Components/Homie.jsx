import React from 'react'

function Homie() {
    let lucky = 7;
    // random number
    let rn = Math.floor(Math.random()*10);
    // let el;
    // if(lucky === rn){
    //     el = <h1>Lucky-7</h1>
    // }else
    // {
    //     el = <h1>try later</h1>
    // }

    //through condition rendering = ternary operator

  return (
    <div>
        {/* <h1>{el}</h1> */}
        <h1>{rn}</h1>
        
        {
            rn === lucky ? <h1>thala for a reason </h1> : <p>try later</p>
        }
    </div>
  )
}

export default Homie