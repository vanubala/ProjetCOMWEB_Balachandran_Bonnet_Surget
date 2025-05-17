import { useState, useEffect } from 'react'
import Navbar from './NavBar'
import './Accueil.css'
import { FaEye } from 'react-icons/fa';

import Bloc from './Bloc';
import { Link } from 'react-router-dom';

function Accueil() {
  const role = localStorage.getItem("role");
  const [etudiant, setEtudiant] = useState(null);
  const [dateDuJour, setDateDuJour] = useState("");

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
  

  useEffect(() => {
    const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const moisNom = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const today = new Date();
    const jour = jours[today.getDay()];
    const date = today.getDate();
    const mois = moisNom[today.getMonth()];

    setDateDuJour(`${jour} ${date} ${mois}`);
  }, []);

  return (
    <>
      <Navbar/>

      {/* ACCUEIL ELEVE */}

      {role === "élève" && etudiant && (
        <div style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Bienvenue sur ton espace personnel</h1>

          <div className="container1">
            
            {/* EMPLOI DU TEMPS */}
            <Bloc style={{height:'400px'}}>
              <h2 style={{ marginBottom: '2rem' }}>ᐊ {dateDuJour} ᐅ</h2>
              <div className="emploi-du-temps">
                <div className="heure">08:00</div>
                <div className="cours-maths">Maths — Salle 101</div>

                <div className="heure">09:00</div>
                <div className="cours-histoire">Histoire — Salle 203</div>

                <div className="heure">10:00</div>
                <div className="cours-eps">EPS — Gymnase</div>

                <div className="heure">11:00</div>
                <div className="cours-anglais">Anglais — Salle 105</div>

                <div className="heure">13:30</div>
                <div className="cours-physique">Physique — Salle 110</div>
              </div>
            </Bloc>


            {/* NOTES */}
            <Bloc style={{height:'400px'}}>
              <div className="notes">
                <Link to="/note" className="icon-info"><FaEye className='icon'/></Link>
              </div>

              <h2 style={{ marginTop: '1', marginBottom: '2rem' }}> Dernières notes</h2>

              <table className="tableau-notes">
                <thead>
                  <tr style={{ backgroundColor: '#f0f0f0' }}>
                    <th className="tableau-titre">Matière</th>
                    <th className="tableau-titre">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.5rem 0.75rem' }}>Maths</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="note-maths">{etudiant.Mathématiques}/20</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem 0.75rem' }}>Anglais</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="note-francais">{etudiant.Anglais}/20</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem 0.75rem' }}>Physique</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="note-physique">{etudiant.Physique}/20</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Bloc>

            {/* DEVOIRS */}
            <Bloc width='400px' style={{height:'400px'}} >
              <h2 style={{ marginBottom: '1rem' }}> Devoirs à faire</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="devoirs-maths">
                  <input type="checkbox" />
                  <span><strong>📘 Maths :</strong> exercices p.42 à rendre vendredi</span>
                </li>

                <li className="devoirs-anglais">
                  <input type="checkbox" />
                  <span><strong>🧠 Anglais :</strong> apprendre le vocabulaire "Food and drinks"</span>
                </li>

                <li className="devoirs-histoire">
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
          <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Espace professeur</h1>

        <div className="container1">

        {/*EMPLOI DU TEMPS*/}
        <Bloc width='350px' >
          <h2 style={{ marginBottom: '2rem' }}>ᐊ {dateDuJour} ᐅ</h2>
              <div className="emploi-du-temps">
                <div className="heure">08:00</div>
                <div className="cours-maths">T°1 — Salle 101</div>

                <div className="heure">09:00</div>
                <div className="cours-maths">T°1 — Salle 101</div>

                <div className="heure">10:00</div>
                <div className="pas-cours"></div>

                <div className="heure">11:00</div>
                <div className="pas-cours"></div>

                <div className="heure">13:30</div>
                <div className="cours-histoire">T°3 — Salle 110</div>
              </div>
        </Bloc>

        <div className="container2">

          {/*PENSE BETE*/}
          <Bloc width='350px' style={{height:'200px'}}>
            <h2 style={{ marginTop: '0', fontSize: '1rem', marginBottom: '0.5rem' }}> 
              <span style={{ backgroundColor: 'yellow' }}>Pense-Bête</span></h2>
              <div style={{fontSize:'0.8rem'}}>Ne pas oublier de distribuer les copies corrigées des T°1</div>
          </Bloc>

        {/*CAHIER DE TEXTE*/}
          <Bloc width='350px'>
            <h2 style={{ marginTop: '0', fontSize: '1rem', marginBottom: '0.5rem' }}>Cahier de texte</h2>
                <div className="container3">
                  
                  {/* Entrée 1 */}
                  <div className="devoirs1">
                    <div style={{display:'flex', justifyContent: 'space-between' }}>
                      <span><strong>Lundi 12 mai</strong></span>
                      <span><strong>T°3</strong></span>
                    </div>
                    <div className="devoirs-info">→ Gén. et évolution : Exercices 3 à 7 p. 102</div>
                  </div>

                  {/* Entrée 2 */}
                  <div className="devoirs2">
                    <div style={{display:'flex', justifyContent: 'space-between' }}>
                      <span><strong>Mardi 13 mai</strong></span>
                      <span><strong>T°1</strong></span>
                    </div>
                    <div className="devoirs-info">→ Contrôle à corriger : Climats de la Terre</div>
                  </div>
                </div>
          </Bloc>
        </div>

        {/*AGENDA*/}
          <Bloc width='350px'>
            <h2 style={{ marginTop: '0', fontSize: '1rem', marginBottom: '0.5rem' }}>Agenda</h2>
            <div className="agenda">
              
              {/* Entrée 1 */}
              <div className="agenda-info">
                <div className="carre-date">12 mai</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Réunion parents-élèves</div>
                  <div style={{ fontSize: '0.8rem', color: '#555' }}>Le 12 mai de 17h00 à 19h00</div>
                </div>
              </div>

              {/* Entrée 2 */}
              <div className="agenda-info">
                <div className="carre-date">15 mai</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Bac blanc BIOLOGIE</div>
                  <div style={{ fontSize: '0.8rem', color: '#555' }}>Le 15 mai de 14h00 à 18h00</div>
                </div>
              </div>

              {/* Entrée 3 */}
              <div className="agenda-info">
                <div className="carre-date">16 mai</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Sortie - Musée des Sciences</div>
                  <div style={{ fontSize: '0.8rem', color: '#555' }}>Le 16 mai de 09h00 à 13h00</div>
                </div>
              </div>

              {/* Entrée 4 */}
              <div className="agenda-info">
                <div className="carre-date">12 juin</div>
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
