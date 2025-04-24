import { Link } from 'react-router-dom'

function Navbar(){
    return (
    <nav>
      <div><Link to='/Accueil'>Accueil</Link></div>
      <div><Link to='/Note'>Note</Link></div>
    </nav>
    )
  }

  export default Navbar