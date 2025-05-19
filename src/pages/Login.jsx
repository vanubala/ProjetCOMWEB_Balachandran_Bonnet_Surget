import {React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  // ----------Initialisation des variables pour la connexion----------
  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [indice, setIndice] = useState(false);
  const navigate = useNavigate();

  // ----------Récupération du rôle pour distinguer un élève d'un professeur----------
  const role = localStorage.getItem("role");

  // ----------Importation des images----------
  const roleImages = {
    professeur: "./logo-prof.png",
    parent: "./logo-parents.png",
    élève: "./logo-eleve.png",
  };
  const imageSrc = roleImages[role] || "./apollo.png";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("identifiant", identifiant);
    formData.append("motDePasse", motDePasse);


    // ----------Gestion de la connexion en fonction de la personne connectée----------
    if (role=="élève"){
      fetch("https://vbalachandr.zzz.bordeaux-inp.fr/react-api/etudiant.php", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem("etudiant", JSON.stringify(data.etudiant)); // Stockage de la requête de etudiant.php
            navigate("/Accueil"); // Redirection vers la page d'accueil
          } else {
            setErreur(data.message || "Échec de la connexion.");
          }
        })
        .catch(() => {
          setErreur("Erreur de connexion au serveur.");
        });
    }
    else if (role=="professeur"){
      fetch("https://vbalachandr.zzz.bordeaux-inp.fr/react-api/prof.php", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem("prof", JSON.stringify(data.prof)); // Stockage de la requête de prof.php
            navigate("/Accueil"); // Redirection vers la page d'accueil
          } else {
            setErreur(data.message || "Échec de la connexion.");
          }
        })
        .catch(() => {
          setErreur("Erreur de connexion au serveur.");
        });
    }

  };



  return (
    <div className="login-container">
      <h2> Espace {role ? role.charAt(0).toUpperCase() + role.slice(1)+"s" : ''} </h2>
      <img src={imageSrc} alt={`Image pour ${role}`} className="role-image" />
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Identifiant : </label>
          <input
            type="text"
            value={identifiant}
            onChange={(e) => setIdentifiant(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe : </label>
          <input
            type="password"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
        <p className="mdpoubli" onClick={() => setIndice(!indice)}
        >
          Mot de passe oublié ?
        </p>

        {indice && (<p className="indice"> jjmmaaaa</p>
        )}
      </form>
      {erreur && <p className="erreur">{erreur}</p>}
    </div>
  );
}

export default Login;

