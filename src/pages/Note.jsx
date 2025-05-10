import { useState, useEffect } from 'react'
import Navbar from './NavBar'

function Note() {
  const [notes, setNotes] = useState([]);
  const [etudiant, setEtudiant] = useState(null);

  useEffect(() => {
    fetch("http://localhost/react-api/get_notes.php")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);

        const filtre = data.find((etudiant) => etudiant.NOM_Prénom === "Benoît Rivière");
        setEtudiant(filtre);
      })
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
          <p>Chargement ou élève non trouvé.</p>
        )}
      </div>
    </>
  )
}

export default Note