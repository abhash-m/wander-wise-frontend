import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Register'

const App = () => {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Landing />} />
       <Route path="/about" element={<About />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login /> } />
     </Routes>
   </BrowserRouter>
  )
}

export default App



