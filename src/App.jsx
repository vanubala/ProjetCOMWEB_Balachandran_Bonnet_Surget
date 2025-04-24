import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Accueil from './pages/Accueil'
import Identification from './pages/Identification'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Accueil' element={<Accueil/>}/>
        <Route path='/Identification' element={<Identification/>}/>
      </Routes>
    </Router>
    </>

  )
}

function Navbar(){
  return (
  <nav>
    <div><Link to='/'>Home</Link></div>
    <div><Link to='/Accueil'>Accueil</Link></div>
    <div><Link to='/Identification'>Identification</Link></div>
  </nav>
  )
}

export default App
