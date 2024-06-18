// render particular component

import React, { useState } from 'react'

function TodoAdvance() {
  return (
    <>
    <Display title = "study" desc="study karlo sab"/>
    <BadaDisplay title= "shop" desc="kuch khate hn"/>
    </>
  )
}

function Display(props){
    return(
        <>
            <h1>Title:{props.title}</h1>
            <h2>Desc:{props.desc}</h2>
        </>
    )
}

function BadaDisplay({title, desc}){
    let [newTitle, setNewTitle] = useState(title);
    function handleClick(){
        setNewTitle(Math.floor(Math.random()*10))
    }
    return(
        <>
            <button onClick={handleClick}>click</button>
            <Display title={newTitle} desc={desc}/>
        </>
    )
}

export default TodoAdvance