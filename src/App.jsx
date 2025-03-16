import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Skills/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
