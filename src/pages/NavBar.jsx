import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./NavBar.css";

function Navbar(props) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    setShowPopup(false);
    navigate('/Identification'); // Redirige vers la page d'identification
  };

  return (
    <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'black',
        position: 'relative', // Pour positionner le popup par rapport à la navbar
      }}>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to='/Accueil' style={{ color: 'white' }}>Accueil</Link>
        <Link to='/Note' style={{ color: 'white' }}>Note</Link>
      </div>

      <div style={{ color: 'white', fontWeight: 'bold', position: 'relative' }}>
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
  );
}

export default Navbar;
