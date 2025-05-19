import { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserType.css';

function UserType() {
  // ----------Stockage du rôle pour distinguer un élève d'un professeur----------
  const [role, setRole] = useState('');
  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    localStorage.setItem("role", selectedRole);
  };

  
  return (
    <>
    <div className="usertype-page">
      <header className="usertype-header">
        <img src="./logo-ensc.png" alt="Logo ENSC" className="logo-ensc" />
        <h2 className="etab-name">ENSC</h2>
        <img src="./logo.png" alt="Logo Apollo" className="logo-apollo" />
      </header>

      <main className="usertype-main">
        <div className="roles-container">
        <Link to="/Identification" onClick={() => handleRoleSelection("élève")}>
            <div className="role-card">
              <img src="./eleve.png" alt="Élèves" />
              <span>Élèves</span>
            </div>
          </Link>
            <div className="role-card">
              <img src="./parents.png" alt="Parents" />
              <span>Parents</span>
            </div>
          <Link to="/Identification" onClick={() => handleRoleSelection("professeur")}>
            <div className="role-card">
              <img src="./prof.png" alt="Professeurs" />
              <span>Professeurs</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
    {role}
    </>
  );
}

export default UserType;
