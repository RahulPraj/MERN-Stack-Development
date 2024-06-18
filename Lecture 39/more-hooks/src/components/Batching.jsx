import React, { Fragment ,useState} from 'react'

function CounterApp() {
    // let [count, setCount] = useState(0);
    // function handleIncrement(){
    //     console.log(count , "before");
    //     setCount(count+1);
    //     console.log(count , "1");
    //     setCount(count+1);
    //     console.log(count , "2");
    //     setCount(count+1);
    //     console.log(count , "after");
    // }
    //or number or setState increase
    let [count, setCount] = useState(0);
    let [count2, setCount2] = useState(0);
    function handleIncrement(){
        console.log(count , "before");
        setCount(count+1);
        setCount2(count2+1)
        console.log(count , "mid");
        setCount(count+1);
        setCount2(count2+1);
        console.log(count , "after");
    }
    return (
    <Fragment>
        <button onClick={handleIncrement}>Increase - {count}</button>
    </Fragment>
  );
}

export default CounterApp