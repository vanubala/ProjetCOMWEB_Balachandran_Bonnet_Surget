import { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserType.css';

function UserType() {
  const [role, setRole] = useState('');

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    
    <body className='fond-usertype'>
      <div className="conteneur-principal">
        <div className='bloc-gauche'>
          <img src="./logo.png" alt="Logo" className="logo" />
        </div>

        <div className='bloc-droit'>
          <div className="role-buttons">
            <Link to="/Identification">
              <button onClick={() => handleRoleSelection('eleve')} className="role-button">
                Élève
              </button>
            </Link>

            <Link to="/Identification">
              <button onClick={() => handleRoleSelection('professeur')} className="role-button">
                Professeur
              </button>
            </Link>

            <Link to="/Identification">
              <button onClick={() => handleRoleSelection('parent')} className="role-button">
                Parent
              </button>
            </Link>
          </div>
        </div>


        {role && <p>Vous avez sélectionné le rôle: {role}</p>}
      </div>
    </body>
  );
}

export default UserType;
