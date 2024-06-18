import React, { useEffect, useState } from 'react'

function Clock() {
    let[time, setTime] = useState(0);
    // useEffect(
    //     function () {
    //          setInterval(function (){
    //             setTime(time + 1);
    //          }, 1*1000)
    //     },[time]
    // );

    // right way
    // if hme setInterval ko rokna hai to hum usye eak id me daal kr
    // clearInterval me daal denge
    useEffect(
        function () {
           let id =   setInterval(function (){
                setTime(time + 1);
             }, 1*1000);

             //cleanup function
             return ()=>{
                clearInterval(id);
             }
        },[time]
    );
  return (
    <div>
        Time:{time}
    </div>
  )
}

export default Clock