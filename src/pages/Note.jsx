import { useState, useEffect } from 'react'
import Navbar from './NavBar'
import './Note.css'
function Note() {
  const role = localStorage.getItem("role");


  const [notes, setNotes] = useState(null);
  useEffect(() => {
      const notesStocke = localStorage.getItem("notes");
      if (notesStocke) {
        try {
          setNotes(JSON.parse(notesStocke));
        } catch (e) {
          console.error("Erreur de parsing JSON :", e);
        }
      }
    }, [role]);

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
  }, [role]);

  return (
    <>
      <Navbar/>
      <div>
        {role === "élève" && etudiant && (
          <ul className="note-list">
            <li>Français : {etudiant.Français}</li>
            <li>Philosophie : {etudiant.Philosophie}</li>
            <li>Mathématiques : {etudiant.Mathématiques}</li>
            <li>Biologie : {etudiant.Biologie}</li>
            <li>Physique : {etudiant.Physique}</li>
          </ul>
        )}

        {role === "professeur" && notes && (
          <ul className="note-list">
            {notes.map((etudiant) => (
              <li key={etudiant.id}>
                {etudiant.NOM_Prénom} - Français : {etudiant.Français} - Date de naissance : {etudiant.Date_Naissance}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Note