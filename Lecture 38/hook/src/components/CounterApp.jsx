import React, { Fragment ,useState} from 'react'

function CounterApp() {
    let [count, setCount] = useState(0);
    function handleIncrement(){
        console.log(count , "before");
        setCount(count+1);
    }
//     reconcilation -> faster
//   return (
//     <div>
//         <button onClick={handleIncrement}>Increase - {count}</button>
//     </div>
//   )
    // or
    return (
    <Fragment>
        <button onClick={handleIncrement}>Increase - {count}</button>
    </Fragment>
  );
}

export default CounterApp