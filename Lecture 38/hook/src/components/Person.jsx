import React, { useState } from 'react'

// function Person(props) {
//     // let username = props.name;
//     // function logoutHandle(){
//     //     console.log(username);
//     //     username = "anonymus";
//     //     console.log(username);
//     // }

//     // with hook -> useState
//   //   function logoutHandle(){
//   //       setUsername("anonymous user");
//   //   }
//   //  let [username, setUsername] = useState(props.name);
//   // return (
//   //   <div>
//   //       <h1>naam: {username}</h1>
//   //       {/* <h1>naam: {props.name}</h1> */}
//   //       <h1>umar: {props.age}</h1>
//   //       <button onClick={logoutHandle}>logout</button>
//   //   </div>
//   // )
// }

function Person1(props){
  let [username, setUsername]= useState(props.name);
  let [userAge, setUserAge]= useState(props.age);
  let [userGender, setUserGender]= useState(props.gender);

  function personChange(){
    setUsername("Priya");
    setUserAge("22");
    setUserGender("Female");
  }
  return(
    <>
      <h1>firstName: {username}</h1>
      <h2>Age: {userAge}</h2>
      <h2>Gender: {userGender}</h2>
      <button onClick={personChange}>Change</button>
    </>
  )
}

// export default Person
export default  Person1 