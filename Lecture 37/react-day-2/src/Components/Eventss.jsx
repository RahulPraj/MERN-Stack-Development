import React from 'react'

function Eventss() {

    function handleClick(a){
        // console.log('hello')
        console.log(a, "deleted")
    }
  return (
    <div>
        {/* <button onClick={handleClick()}>Click me !</button>   */} {/*in js */}
        {/* <button onClick={handleClick}>Click me !</button> in react */}
        <button onClick={()=>{handleClick()}}>Delete</button>
        
    </div>
  )
}

export default Eventss