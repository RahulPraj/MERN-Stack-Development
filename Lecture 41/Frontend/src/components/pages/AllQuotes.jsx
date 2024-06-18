import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Quotes from '../quotes/Quotes';

function AllQuotes() {
    let [quotes, setQuotes] = useState([]);

   useEffect(function(){
    async function getQuotes(){
        const res = await  axios.get('http://localhost:8080/allquotes');
        // console.log(res.data, "api rahul")
        setQuotes(res.data);
    }
    getQuotes();
   },[]);

  return (
    <div>
        <h1>AllQuotes</h1>
        <ul>
            {quotes.map((quote, index)=>{
                return(<Quotes key={quote._id} text={quote.text} author={quote.author}/>)
            })}
        </ul>
    </div>
  )
}

export default AllQuotes