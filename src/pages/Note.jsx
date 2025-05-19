import { useState, useEffect } from 'react'
import Navbar from './NavBar'
import './Note.css'
function Note() {
  // ----------Récupération du rôle pour distinguer un élève d'un professeur----------
  const role = localStorage.getItem("role");

  // ----------Récupération des notes de tout les élèves----------
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://vbalachandr.zzz.bordeaux-inp.fr/react-api/get_notes.php")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => console.error("Erreur:", err));
  }, [role]);

  // ----------Récupération des notes de l'élève connecté----------
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

  // ----------Récupération des données du professeur (Pour filtrer les notes en fonction de la matière du professeur)----------
  const [professeur, setProfesseur] = useState(null);
  useEffect(() => {
    const profStocke = localStorage.getItem("prof");
    if (profStocke) {
      try {
        setProfesseur(JSON.parse(profStocke))
      } catch (e) {
        console.error("Erreur de parsing JSON :", e);
      }
    }
  }, [role]);


  return (
    <>
      <Navbar/>
      <div>

        {/*----------Affichage des notes de l'élève----------*/}
        {role === "élève" && etudiant && (
          <ul className="note-list">
            <li><span className="note-label">Anglais</span><span className="note-value">{etudiant.Anglais}</span></li>
            <li><span className="note-label">Philosophie</span><span className="note-value">{etudiant.Philosophie}</span></li>
            <li><span className="note-label">Mathématiques</span><span className="note-value">{etudiant.Mathématiques}</span></li>
            <li><span className="note-label">Biologie</span><span className="note-value">{etudiant.Biologie}</span></li>
            <li><span className="note-label">Physique</span><span className="note-value">{etudiant.Physique}</span></li>
          </ul>
        )}

        {/*----------Affichage des notes des élèves dans la matière du professeur----------*/}
        {role === "professeur" && professeur && notes && (
          <ul className="note-list">
            {notes.map((etudiant) => (
              <li key={etudiant.id}>
                <span className="note-label">{etudiant.NOM_Prénom}</span>
                <span className="note-value">{etudiant[professeur.Matière]}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Note