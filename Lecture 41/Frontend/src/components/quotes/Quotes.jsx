import React from 'react'

function Quotes(props) {
    function showQuoteHandler(){

    }
  return (
    <li>
        <span>
            <h1>Text:{props.text}</h1>
            <h3>Author: {props.author}</h3>
        </span>
        <button onClick={showQuoteHandler}>View </button>
    </li>
  )
}

export default Quotes;