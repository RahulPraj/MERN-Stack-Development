import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Routing from './Components/Routing';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Routing/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App