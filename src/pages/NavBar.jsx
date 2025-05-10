import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"


function Navbar(){
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowPopup(false);
    navigate('/'); // Redirige vers la page d'identification
  };

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
        <Link to='/Accueil' style={{ color: 'white' }}>Accueil</Link>
        <Link to='/Note' style={{ color: 'white' }}>Note</Link>
      </div>
      <div style ={{ color: 'white', fontWeight: 'bold'}}>
        {etudiant ? (
            <p>{etudiant.NOM_Prénom}</p>
          ) : (
            <p>Chargement ou élève non trouvé.</p>
          )}
      </div>

      <div style={{ color: 'white', fontWeight: 'bold', position: 'relative' }}>
        <i className="fi fi-br-exit" style={{ cursor: 'pointer' }} onClick={() => setShowPopup(!showPopup)}></i>

        {showPopup && (
          <div style={{
            position: 'absolute',
            top: '2.5rem',
            right: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Déconnexion
            </button>
          </div>
        )}
      </div>
    </nav>
    )
  }

  export default Navbar;