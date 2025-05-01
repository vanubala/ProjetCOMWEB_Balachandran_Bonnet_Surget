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
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>

        <Bloc> 
          <h2 style={{ marginBottom: '2rem' }}>ᐊ Lundi 5 mai ᐅ</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', rowGap: '0.75rem' }}>
            
            <div style={{ fontWeight: 'bold' }}>08:00</div>
            <div style={{ backgroundColor: '#e0f7fa', padding: '0.5rem 1rem', borderRadius: '6px' }}>Maths — Salle 101</div>

            <div style={{ fontWeight: 'bold' }}>09:00</div>
            <div style={{ backgroundColor: '#fce4ec', padding: '0.5rem 1rem', borderRadius: '6px' }}>Histoire — Salle 203</div>

            <div style={{ fontWeight: 'bold' }}>10:00</div>
            <div style={{ backgroundColor: '#e8f5e9', padding: '0.5rem 1rem', borderRadius: '6px' }}>EPS — Gymnase</div>

            <div style={{ fontWeight: 'bold' }}>11:00</div>
            <div style={{ backgroundColor: '#fff3e0', padding: '0.5rem 1rem', borderRadius: '6px' }}>Anglais — Salle 105</div>

            <div style={{ fontWeight: 'bold'}}>13:30</div>
            <div style={{ backgroundColor: '#ede7f6', padding: '0.5rem 1rem', borderRadius: '6px' }}>Physique — Salle 110</div>
          </div>
        </Bloc>

        <Bloc>
            <h2>📊 Dernières notes</h2>
            <ul>
              <li>Maths : 15/20</li>
              <li>Français : 17/20</li>
              <li>Physique : 12/20</li>
            </ul>
        </Bloc>

        <Bloc width='400px'>
            <h2>📝 Devoirs</h2>
            <p>Maths : exercices page 42<br />Anglais : vocabulaire à apprendre</p>
        </Bloc>
        </div>
      </div>
    </>
  );
}

export default Accueil;
