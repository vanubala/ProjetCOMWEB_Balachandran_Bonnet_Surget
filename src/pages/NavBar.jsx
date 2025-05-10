import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"


function Navbar(){
  const [etudiant, setEtudiant] = useState(null);

  useEffect(() => {
    fetch("http://localhost/react-api/get_notes.php")
      .then((res) => res.json())
      .then((data) => {
        const filtre = data.find((etudiant) => etudiant.NOM_Prénom === "Benoît Rivière");
        setEtudiant(filtre);
      })
      .catch((err) => console.error("Erreur:", err));
  }, []);
    return (
    <nav
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center', // Centrer les éléments verticalement
      padding: '1rem 2rem', // Largeur de la NavBar
      backgroundColor: 'black',
      top: 0,
    }}
    >
      <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to='/Accueil'>Accueil</Link>
          <Link to='/Note'>Note</Link>
      </div>
      <div style ={{ color: 'white', fontWeight: 'bold'}}>
        {etudiant ? (
            <p>{etudiant.NOM_Prénom}</p>
          ) : (
            <p>Chargement ou élève non trouvé.</p>
          )}
      </div>
      <div style={{ color: 'white', fontWeight: 'bold' }}>
          <Link to='/Identification'><i className="fi fi-br-exit"></i></Link>
      </div>
    </nav>
    )
  }

  export default Navbar