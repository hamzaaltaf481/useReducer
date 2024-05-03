import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import 
{BrowserRouter as Router, 
  Route,
  Routes,
  }from "react-router-dom"
import CartNav from './CartNav'
import Home from './Home'
// items

function App() {
  const {loading} = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/CartNav" element={<CartNav/>}/>
        </Routes>
    </Router>
  )
}

export default App
