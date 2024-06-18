import React from 'react'

function Anthing() {
    
    // array ko directly excees krskte hn
    let arr = [10,20,30,40]
    // object ko directly excess nhi krskte hn , 
    //uski koyi properties ko access kr skte hn
    let obj = {a:10}

  return (

    <div>
        {/* <h1>{arr}</h1> */}
        <h1>{JSON.stringify(obj)}</h1>
        {/* <h1>{obj.a}</h1> */}
    </div>
  )
}

export default Anthing