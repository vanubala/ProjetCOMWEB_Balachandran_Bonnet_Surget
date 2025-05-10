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
  return (
    <>
      <Navbar/>
      <div>
        {etudiant ? (
          <ul>
            <li> NOM : {etudiant.NOM_Prénom}</li>
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