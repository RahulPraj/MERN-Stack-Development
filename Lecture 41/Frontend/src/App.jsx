import React from 'react'
import {Route, Routes} from "react-router-dom" 
import MainNavigation from './components/mainNavigation/MainNavigation'
import AllQuotes from "./components/pages/AllQuotes"
import NewQuotes from "./components/pages/NewQuotes"
function App() {
  return (
    <div>
      <React.Fragment>
        <MainNavigation/>
          <Routes>
              <Route path="/" element={<AllQuotes/>}/>
              <Route path="/new" element={<NewQuotes/>}/>
          </Routes>
      </React.Fragment> 

    </div>
  )
}

export default App
