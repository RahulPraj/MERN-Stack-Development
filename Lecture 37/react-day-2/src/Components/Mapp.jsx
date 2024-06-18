import React from 'react'

function Mapp() {
    let arr = ['rahul', 'praj', 'sam', 'sir', 'class'];
    let r = Math.floor(Math.random()*5);
  return (
    <div>
        {
            arr.map((item, index)=>{
                return <h1 key={index}>{item}</h1>
            })
        }
    </div>
  )
}

export default Mapp