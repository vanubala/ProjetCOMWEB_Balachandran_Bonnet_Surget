import {React, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import UserType from './UserType';
import './Login.css'

function Identifiant() {
  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [indice, setIndice] = useState(false);
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
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

    if (role=="élève"){
      fetch("http://localhost/react-api/login.php", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem("etudiant", JSON.stringify(data.etudiant));
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
      fetch("http://localhost/react-api/prof.php", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem("prof", JSON.stringify(data.prof));
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

export default Identifiant;

