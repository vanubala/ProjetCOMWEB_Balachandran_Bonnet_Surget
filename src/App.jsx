import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Identification from './pages/Identification'
import Accueil from './pages/Accueil'
import Note from './pages/Note'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Identification/>}/>
        <Route path='/Accueil' element={<Accueil/>}/>
        <Route path='/Note' element={<Note/>}/>
      </Routes>
    </Router>
    </>

  )
}


export default App
