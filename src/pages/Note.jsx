import { useState, useEffect } from 'react'
import Navbar from './NavBar'

function Note() {
  const [etudiant, setEtudiant] = useState(null);
  useEffect(() => {
    const etudiantStocke = localStorage.getItem("etudiant");
    if (etudiantStocke) {
      try {
        setEtudiant(JSON.parse(etudiantStocke));
      } catch (e) {
        console.error("Erreur de parsing JSON :", e);
      }
    }
  }, []);

  const [notes, setNotes] = useState([]);
  const role = localStorage.getItem("role");
    if (role == "professeur")
    {
      useEffect(() => {
        fetch("http://localhost/react-api/get_notes.php")
          .then((res) => res.json())
          .then((data) => setNotes(data))
          .catch((err) => console.error("Erreur:", err));
      }, []);
    }

  return (
    <>
      <Navbar/>
      <div>
        {etudiant ? (
          <ul>
            <li>Français : {etudiant.Français}</li>
            <li>Philosophie : {etudiant.Philosophie}</li>
            <li>Mathématiques : {etudiant.Mathématiques}</li>
            <li>Biologie : {etudiant.Biologie}</li>
            <li>Physique : {etudiant.Physique}</li>
          </ul>
        ) : (
          ""
        )}
      <ul>
          {notes.map((etudiant) => (
            <li key={etudiant.id}>  {etudiant.NOM_Prénom} - {etudiant.Français} - {etudiant.Date_Naissance}</li>
          ))}
      </ul>
      </div>
    </>
  )
}

export default Note