import { useState, useEffect } from 'react'
import Navbar from './NavBar'

function Note() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost/react-api/get_notes.php")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error("Erreur:", err));
  }, []);
  return (
    <>
      <Navbar/>
      <ul>
          {notes.map((etudiant) => (
            <li key={etudiant.id}>  {etudiant.NOM_Prénom} - {etudiant.Français} - {etudiant.Date_Naissance}</li>
          ))}
      </ul>
    </>
  )
}

export default Note