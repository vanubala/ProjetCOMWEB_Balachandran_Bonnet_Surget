import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Accueil from './pages/Accueil'
import Note from './pages/Note'
import UserType from './pages/UserType'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<UserType/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Accueil' element={<Accueil/>}/>
        <Route path='/Note' element={<Note/>}/>
      </Routes>
    </Router>
    </>

  )
}


export default App
