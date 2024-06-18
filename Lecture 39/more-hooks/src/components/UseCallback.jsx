import React, { memo, useCallback, useState } from 'react'

function UseCallback() {
    let [count, setCounter] = useState(0);

    // let a = 1;
     let a = useCallback(function () {
      console.log("hello")
    }, [])
  return (
    <div>
      <Demo  a = {a}/>
      <button onClick={()=> setCounter(count+1)}>click - {count}</button>
    </div>
  )
}

let Demo = memo(function ({a}){
  return(
    // <h1>hello - {a}</h1>
      <h1>hello - {a()}</h1>
  )
})
export default UseCallback