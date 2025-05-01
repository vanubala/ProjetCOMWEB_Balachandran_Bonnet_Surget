import { useState } from 'react'
import Navbar from './NavBar'
import './Accueil.css'
import Bloc from './Bloc';

function Accueil() {
  return (
    <>
      <Navbar /> {/* Barre de Navigation */}
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Bienvenue sur votre espace élève</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>

        <Bloc> {/* Bloc emploi du temps */}
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


        <Bloc> {/* Bloc dernières notes */}
        <h2 style={{ marginBottom: '1rem' }}> Dernières notes</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={{
                textAlign: 'left',
                padding: '0.5rem 0.75rem',
                borderBottom: '1px solid #ccc',
                fontSize: '0.95rem'
              }}>
                Matière
              </th>
              <th style={{
                textAlign: 'center',
                padding: '0.5rem 0.75rem',
                borderBottom: '1px solid #ccc',
                fontSize: '0.95rem'
              }}>
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.5rem 0.75rem' }}>Maths</td>
              <td style={{ textAlign: 'center' }}>
                <span style={{
                  backgroundColor: '#e0f7fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  15/20
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem 0.75rem' }}>Français</td>
              <td style={{ textAlign: 'center' }}>
                <span style={{
                  backgroundColor: '#e8f5e9',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  17/20
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem 0.75rem' }}>Physique</td>
              <td style={{ textAlign: 'center' }}>
                <span style={{
                  backgroundColor: '#fff3e0',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  12/20
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        </Bloc>

        <Bloc width='400px'> {/* Bloc devoirs */}
            <h2>📝 Devoirs</h2>
            <p>Maths : exercices page 42<br />Anglais : vocabulaire à apprendre</p>
        </Bloc>
        </div>
      </div>
    </>
  );
}

export default Accueil;
