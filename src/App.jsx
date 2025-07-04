import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
