import React from 'react'

function Person(props) {
  console.log(props);
  return (
    <div>
      <h2>poora naam: {props.name}</h2>
      <h2>pasandeeda {props.color}</h2>
      <h2>fav kaam: {props.kam}</h2>
    </div>
  )
}

export default Person