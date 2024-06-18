import React, { useMemo, useState } from 'react'

function Meoww() {
    let [count, setCount] = useState(0);
    let [inp, setInp] = useState(0);

    let MyUseMemo = useMemo(
        function () {
            let ans = 0;
            for(let i = 0; i <= inp; i++){
                console.log("rendering");
                ans = ans+i;
            }
            return ans;
        },
        [ inp]
    );
    // it is giving limited value
    // let ans = 0;
    // for(let i = 0; i <= inp; i++){
    //     ans = ans+i;
    // }

    function handleClick(){
        setCount(count+1);
    }
    function handleChange(e){
        setInp(e.target.value);
    }

  return (
    <div>
        {/* uncontroled input , can do change  */}
        {/* <input type="text" name="" id="" /> */}

        {/* controled input  */}
        <input onChange={handleChange} type="text" name="" id="" value={inp} />
        {/* <h1>Sum: {ans}</h1> */}
        <h1>Sum: {MyUseMemo}</h1>
        <button onClick={handleClick}>Click :{count}</button>
    </div>
  )
}

export default Meoww