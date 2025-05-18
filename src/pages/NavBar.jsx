import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./NavBar.css";

function Navbar() {
  // ----------Récupération du rôle pour distinguer un élève d'un professeur----------
  const role = localStorage.getItem("role");

  // ----------Récupération des données de la personne connectée----------
  const [personne, setPersonne] = useState(null);
  useEffect(() => {
    const data =
      role === "élève" ? localStorage.getItem("etudiant") : localStorage.getItem("prof");
    if (data) {
      try {
        setPersonne(JSON.parse(data));
      } catch (e) {
        console.error("Erreur de parsing JSON :", e);
      }
    }
  }, [role]);

  // ----------Initialisation de variables et fonction pour gérer la déconnexion de la personne connectée----------
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowPopup(false);
    navigate('/'); // Redirige vers la page UserType
    localStorage.setItem("etudiant", null);
    localStorage.setItem("prof", null);
    localStorage.setItem("notes", null);
  };



  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to='/Accueil'>Accueil</Link>
        <Link to='/Note'>Note</Link>
      </div>

      {/*----------Affichage du nom de la personne connectée----------*/}
      <div className="navbar-user">
        {personne ? (
          <p>{personne.NOM_Prénom}</p>
        ) : (
          <p>Chargement...</p>
        )}
      </div>

      <div className="navbar-logout">
        <i className="fi fi-br-exit logout-icon" onClick={() => setShowPopup(!showPopup)}></i>

        {/*----------Affichage d'une pop up de déconnexion----------*/}
        {showPopup && (
          <div className="popup">
            <button onClick={handleLogout} className="logout-button">
              Déconnexion
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
