// memo means -> of there is change in component it will rerender if not to nhi karega
import React, { memo, useState } from 'react'

function Memo() {
  let [titl, newTitle] = useState("study");
  function handleClick(){
    newTitle(Math.floor(Math.random()*10));
  }
  return (
    <div>
        <Tod title={titl} desc="study react to understand"/>
          <button onClick={handleClick}>click</button>
          <Tod title="play" desc="play cricket"/>
          <Tod title="gym" desc="do gym daily"/>
      
    </div>
  )
}

// normal method sb rerender hoga
// function Tod(props){
//     return(
//         <>
//             <h1>Title:{props.title}</h1>
//             <h2>Desc:{props.desc}</h2>
//         </>
//     )
// }

// atlernative method -> memo

const Tod = memo(function(props){
  return(
      <div>
          <h1>Title:{props.title}</h1>
          <h2>Desc:{props.desc}</h2>
      </div>
  )
})
export default Memo