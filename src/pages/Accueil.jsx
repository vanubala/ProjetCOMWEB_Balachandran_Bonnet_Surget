import { useState } from 'react'
import Navbar from './NavBar'
import './Accueil.css'
import Bloc from './Bloc';

function Accueil() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Bienvenue sur votre espace élève</h1>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <Bloc>
            <h2>📊 Dernières notes</h2>
            <ul>
              <li>Maths : 15/20</li>
              <li>Français : 17/20</li>
              <li>Physique : 12/20</li>
            </ul>
          </Bloc>

          <Bloc>
            <h2>📅 Emploi du temps</h2>
            <p>08:00 - Maths<br />09:00 - Histoire<br />10:00 - EPS</p>
          </Bloc>

          <Bloc width="100%">
            <h2>📝 Devoirs</h2>
            <p>Maths : exercices page 42<br />Anglais : vocabulaire à apprendre</p>
          </Bloc>
        </div>
      </div>
    </>
  );
}

export default Accueil;
