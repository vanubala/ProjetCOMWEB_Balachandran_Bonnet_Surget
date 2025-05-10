import { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserType.css'; // Pour le style (optionnel)

function UserType() {
  const [role, setRole] = useState('');

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    
    <body className='fond-usertype'>

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

      {role && <p>Vous avez sélectionné le rôle: {role}</p>}
    </body>
  );
}

export default UserType;
