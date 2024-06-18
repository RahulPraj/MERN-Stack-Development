import React,{ Fragment ,useState} from 'react'

function Solution() {

    let [count, setCount] = useState(0);
    function handleIncrement(){
        
        setCount((curr)=> curr+1); //curr -> 1
        setCount((baba)=> baba+1); //baba have its previous value of curr
        console.log("rendering");
    }
  return (
    <Fragment>
        <button onClick={handleIncrement}>Increase - {count}</button>
    </Fragment>
  )
}

export default Solution