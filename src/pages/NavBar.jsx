import { Link } from 'react-router-dom'
import "./NavBar.css"


function Navbar(){
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
      <div style={{ color: 'white', fontWeight: 'bold' }}>
          <Link to='/'><i className="fi fi-br-exit"></i></Link>
      </div>
    </nav>
    )
  }

  export default Navbar