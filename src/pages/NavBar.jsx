import { Link } from 'react-router-dom'

function Navbar(){
    return (
    <nav
    style={{
      justifyContent: 'flex-start', // Accueil et Note sont à gauche
      gap: '2rem', // Espace entre Accueil et Note
      padding: '1rem 2rem', // Largeur de la NavBar
      backgroundColor: 'black',
      top: 0,
    }}
    >
      <div><Link to='/Accueil'>Accueil</Link></div>
      <div><Link to='/Note'>Note</Link></div>
    </nav>
    )
  }

  export default Navbar