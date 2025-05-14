import { useState, useEffect } from 'react'
import Navbar from './NavBar'
import './Note.css'
function Note() {
  const role = localStorage.getItem("role");


  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost/react-api/get_notes.php")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => console.error("Erreur:", err));
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

  const [personne, setPersonne] = useState(null);
  useEffect(() => {
    const profStocke = localStorage.getItem("prof");
    if (profStocke) {
      try {
        setPersonne(JSON.parse(profStocke));
      } catch (e) {
        console.error("Erreur de parsing JSON :", e);
      }
    }
  }, [role]);

  setPersonne(personne.Matière)
  return (
    <>
      <Navbar/>
      <div>
        {role === "élève" && etudiant && (
          <ul className="note-list">
            <li>Anglais : {etudiant.Anglais}</li>
            <li>Philosophie : {etudiant.Philosophie}</li>
            <li>Mathématiques : {etudiant.Mathématiques}</li>
            <li>Biologie : {etudiant.Biologie}</li>
            <li>Physique : {etudiant.Physique}</li>
          </ul>
        )}

        {role === "professeur" && notes && (
          <ul className="note-list">
            {notes.map((eleve) => (
              <li key={eleve.id}>
                {eleve.NOM_Prénom} - Français : {eleve.personne} - Date de naissance : {eleve.Date_Naissance}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Note