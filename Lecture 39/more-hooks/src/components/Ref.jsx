import React, { useEffect, useRef } from 'react'

function Ref() {
    let salary = 50000;

    // not better approach.
    // useEffect(function(){
    //     setTimeout(function(){
    //         document.getElementById('sal').innerHTML="33000"
    //     }, 5000)
    // },[])

    // best approach
   let spanEl = useRef(); //reference to the element
   useEffect(function(){
        setTimeout(function(){
            // current is a property that tell the current element that is span.
           spanEl.current.innerHTML = "33000";
        }, 5000)
    },[])

  return (
    <div>
        {/* salary is : <span id='sal'>{salary}</span> */}
        {/* spanEl give refrence to the span element */}
        salary is : <span ref={spanEl}>{salary}</span> 
    </div>
  )
}

export default Ref