import React, {useState} from 'react'

// function Todos() {
//   return (
//     <React.Fragment>
//         <DisplayTodo title="study" desc="study react to understand"/>
//         <DisplayTodo title="play" desc="play cricket"/>
//         <DisplayTodo title="gym" desc="do gym daily"/>
//     </React.Fragment>
//   )
// }

// function DisplayTodo(props){
//     return(
//         <>
//         <h1>TITLE:{props.title}</h1>
//         <h2>DESC:{props.desc}</h2>
//         </>
//     )
// }

// when we use , useState
function Todos() {
  let [titl, setTitl] = useState("study");
  function handleClick(){
    setTitl(Math.floor(Math.random()*10));
  }
    return (
      <React.Fragment>
          <DisplayTodo title={titl} desc="study react to understand"/>
          <button onClick={handleClick}>click</button>
          <DisplayTodo title="play" desc="play cricket"/>
          <DisplayTodo title="gym" desc="do gym daily"/>
      </React.Fragment>
    )
  }
  
  function DisplayTodo(props){
      return(
          <>
          <h1>TITLE:{props.title}</h1>
          <h2>DESC:{props.desc}</h2>
          </>
      )
  }

export default Todos