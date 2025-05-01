import { useState } from 'react'
import Navbar from './NavBar'
import './Accueil.css'

function Accueil() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Bienvenue sur votre espace élève</h1>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '300px' }}>
            <h2>📊 Dernières notes</h2>
            <ul>
              <li>Maths : 15/20</li>
              <li>Français : 17/20</li>
              <li>Physique : 12/20</li>
            </ul>
          </div>

          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '300px' }}>
            <h2>📅 Emploi du temps</h2>
            <p>08:00 - Maths<br />09:00 - Histoire<br />10:00 - EPS</p>
          </div>

          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '300px' }}>
            <h2>📝 Devoirs</h2>
            <p>Maths : exos p.42<br />Anglais : apprendre vocabulaire</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accueil;
