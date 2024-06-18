import React from 'react'

function Hello() {
    let a = 10;
    let b = "sam";
    let c = true;
    let d = false;
    let e = null;
    let f = undefined;


  return (
    <div>Hello
        {/* <h1>{a}</h1>

        <h1>{b}</h1> */}

         {/* <h1>{JSON.stringify(c)}</h1>
        <h1>{c.toString()}</h1>  */}

        {/* <h1>{JSON.stringify(d)}</h1>
        <h1>{d.toString()}</h1> */}

        <h1>{JSON.stringify(e)}</h1>
        <h1>{e.toString()}</h1>

        {/* <h1>{JSON.stringify(f)}</h1>
        <h1>{f.toString()}</h1> */}
    </div>
    
  )
}

export default Hello