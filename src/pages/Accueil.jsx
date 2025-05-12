import { useState, useEffect } from 'react'
import Navbar from './NavBar'
import './Accueil.css'

import Bloc from './Bloc';
import { Link } from 'react-router-dom';

function Accueil() {
  const role = localStorage.getItem("role");
  const [etudiant, setEtudiant] = useState(null);

  useEffect(() => {
    if (role === "élève") {
      const etudiantStocke = localStorage.getItem("etudiant");
      if (etudiantStocke) {
        try {
          setEtudiant(JSON.parse(etudiantStocke));
        } catch (e) {
          console.error("Erreur de parsing JSON :", e);
        }
      }
    }
  }, [role]);

  return (
    <>
      <Navbar/>

      {/* ACCUEIL ELEVE */}

      {role === "élève" && etudiant && (
        <div style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Bienvenue sur ton espace personnel
          </h1>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            
            {/* EMPLOI DU TEMPS */}
            <Bloc style={{height:'400px'}}>
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

            {/* NOTES */}
            <Bloc style={{height:'400px'}}>
              <div style={{ width: '100%', textAlign: 'right' }}>
                <Link to="/note" style={{color: 'rgba(80, 104, 239, 0.95)', fontSize: '1.25rem', textDecoration: 'none'}}><i className="fi fi-sr-eye"></i></Link>
              </div>

              <h2 style={{ marginTop: '0', marginBottom: '1rem' }}> Dernières notes</h2>

              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f0f0f0' }}>
                    <th style={{ textAlign: 'center', padding: '0.5rem 0.75rem', borderBottom: '1px solid #ccc', fontSize: '0.95rem' }}>
                      Matière
                    </th>
                    <th style={{ textAlign: 'center', padding: '0.5rem 0.75rem', borderBottom: '1px solid #ccc', fontSize: '0.95rem' }}>
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.5rem 0.75rem' }}>Maths</td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{ backgroundColor: '#e0f7fa', padding: '0.25rem 0.75rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        {etudiant.Mathématiques}/20
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem 0.75rem' }}>Français</td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{ backgroundColor: '#e8f5e9', padding: '0.25rem 0.75rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        {etudiant.Français}/20
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem 0.75rem' }}>Physique</td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{ backgroundColor: '#fff3e0', padding: '0.25rem 0.75rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        {etudiant.Physique}/20
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Bloc>

            {/* DEVOIRS */}
            <Bloc width='400px' style={{height:'400px'}} >
              <h2 style={{ marginBottom: '1rem' }}> Devoirs à faire</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{
                  backgroundColor: '#f9f9f9',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  marginBottom: '0.75rem',
                  borderLeft: '5px solid #42a5f5',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <input type="checkbox" />
                  <span><strong>📘 Maths :</strong> exercices p.42 à rendre vendredi</span>
                </li>

                <li style={{
                  backgroundColor: '#fefefe',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  marginBottom: '0.75rem',
                  borderLeft: '5px solid #66bb6a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <input type="checkbox" />
                  <span><strong>🧠 Anglais :</strong> apprendre le vocabulaire "Food and drinks"</span>
                </li>

                <li style={{
                  backgroundColor: '#f9f9f9',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  marginBottom: '0.75rem',
                  borderLeft: '5px solid #ffa726',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <input type="checkbox" />
                  <span><strong>✍️ Histoire :</strong> rédiger une biographie de Napoléon</span>
                </li>
              </ul>
            </Bloc>
          </div>
        </div>
      )}

      {/* ACCUEIL PROF */}
      {role === "professeur" && (
        <div style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Espace professeur
          </h1>

        <div style={{ display:'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>

        {/*EMPLOI DU TEMPS*/}
        <Bloc style={{height:'350px'}}>
          <h2 style={{ marginBottom: '2rem' }}>ᐊ Lundi 5 mai ᐅ</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', rowGap: '0.75rem' }}>
                <div style={{ fontWeight: 'bold' }}>08:00</div>
                <div style={{ backgroundColor: '#e0f7fa', padding: '0.5rem 1rem', borderRadius: '6px' }}>T°1 — Salle 101</div>

                <div style={{ fontWeight: 'bold' }}>09:00</div>
                <div style={{ backgroundColor: '#e0f7fa', padding: '0.5rem 1rem', borderRadius: '6px' }}>T°1 — Salle 101</div>

                <div style={{ fontWeight: 'bold' }}>10:00</div>
                <div style={{ backgroundColor: 'lightgrey', padding: '0.5rem 1rem', borderRadius: '6px' }}></div>

                <div style={{ fontWeight: 'bold' }}>11:00</div>
                <div style={{ backgroundColor: 'lightgrey', padding: '0.5rem 1rem', borderRadius: '6px' }}></div>

                <div style={{ fontWeight: 'bold'}}>13:30</div>
                <div style={{ backgroundColor: '#fce4ec', padding: '0.5rem 1rem', borderRadius: '6px' }}>T°3 — Salle 110</div>
              </div>
        </Bloc>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/*PENSE BETE*/}
          <Bloc style={{height:'200px'}}>
            <h2 style={{ marginTop: '0', fontSize: '1rem', marginBottom: '0.5rem' }}>Pense-Bête</h2>
              <div style={{fontSize:'0.8rem'}}>Ne pas oublier de distribuer les copies corrigées des T°1</div>
          </Bloc>

        {/*CAHIER DES CHARGES*/}
          <Bloc>
            <h2 style={{ marginTop: '0', fontSize: '1rem', marginBottom: '0.5rem' }}>Cahier de texte</h2>
                <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  
                  {/* Entrée 1 */}
                  <div style={{ backgroundColor: '#f9f9f9', padding: '0.5rem 0.75rem', borderRadius: '6px' }}>
                    <div style={{display:'flex', justifyContent: 'space-between' }}>
                      <span><strong>Lundi 12 mai</strong></span>
                      <span><strong>T°3</strong></span>
                    </div>
                    <div style={{marginTop:'12px', fontSize:'0.8rem'}}>→ Gén. et évolution : Exercices 3 à 7 p. 102</div>
                  </div>

                  {/* Entrée 2 */}
                  <div style={{ backgroundColor: '#f0f8ff', padding: '0.5rem 0.75rem', borderRadius: '6px' }}>
                    <div style={{display:'flex', justifyContent: 'space-between' }}>
                      <span><strong>Mardi 13 mai</strong></span>
                      <span><strong>T°1</strong></span>
                    </div>
                    <div style={{marginTop:'12px', fontSize:'0.8rem'}}>→ Contrôle à corriger : Climats de la Terre</div>
                  </div>
                </div>
          </Bloc>
        </div>

        {/*AGENDA*/}
          <Bloc width='400px'>
            <h2 style={{ marginTop: '0', fontSize: '1rem', marginBottom: '0.5rem' }}>Agenda</h2>
            <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              
              {/* Entrée 1 */}
              <div style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                
                {/* Carré date */}
                <div style={{
                  backgroundColor: '#d0f0c0',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  minWidth: '60px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.85rem'
                }}>
                  12 mai
                </div>

                {/* Infos à droite */}
                <div>
                  <div style={{ fontWeight: 'bold' }}>Réunion parents-élèves</div>
                  <div style={{ fontSize: '0.8rem', color: '#555' }}>Le 12 mai de 17h00 à 19h00</div>
                </div>
              </div>

              {/* Entrée 2 */}
              <div style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  backgroundColor: '#d0f0c0',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  minWidth: '60px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.85rem'
                }}>
                  15 mai
                </div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Bac blanc BIOLOGIE</div>
                  <div style={{ fontSize: '0.8rem', color: '#555' }}>Le 15 mai de 14h00 à 18h00</div>
                </div>
              </div>

              {/* Entrée 3 */}
              <div style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  backgroundColor: '#d0f0c0',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  minWidth: '60px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.85rem'
                }}>
                  16 mai
                </div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Sortie - Musée des Sciences</div>
                  <div style={{ fontSize: '0.8rem', color: '#555' }}>Le 16 mai de 09h00 à 13h00</div>
                </div>
              </div>

              {/* Entrée 4 */}
              <div style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  backgroundColor: '#d0f0c0',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  minWidth: '60px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.85rem'
                }}>
                  12 juin
                </div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Conseil de classe T°1</div>
                  <div style={{ fontSize: '0.8rem', color: '#555' }}>Le 12 juin à 17h00</div>
                </div>
              </div>



            </div>
          </Bloc>

        </div>
        </div>
      )}
    </>
  );
}

export default Accueil;
