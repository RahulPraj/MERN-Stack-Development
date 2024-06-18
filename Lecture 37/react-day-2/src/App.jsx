// rfce

// import React from 'react'
// //default export
// function App() {
//   // part-1 statement -> if else, for, while, fn
//   let a = 10;

//   // part-2 expressions(kam likhte hn) -> map, evalution, ternary operator
//   return (
//     <div>
//       <h1>hello react friend {a}</h1>
//     </div>
//   )
// }

// export default App


// named export
import React from 'react'
import Hello from './Components/Hello';
import Anthing from './Components/Anthing';
import Homie from './Components/Homie';
import Mapp from './Components/Mapp';
import Eventss from './Components/Eventss';
import Person from './Components/Person';

export function App() {
  let a = 10;
  return (
    <div>
      {/* <h1>hello react friend {a}</h1>
      <Hello/>  */}
      {/* <Anthing/> */}
      {/* <Homie/> */}
      {/* <Mapp/> */}
      {/* <Eventss/> */}
      {/*component ko call krte argument dena is prop */}
      <Person name= "rahul" color="white" kam="gym"/>
      <Person name= "sam" color="black" kam="sketch"/>

    </div>
  )
}

export default App