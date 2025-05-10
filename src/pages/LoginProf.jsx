import {React, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

function IdProf() {
  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("identifiant", identifiant);
    formData.append("motDePasse", motDePasse);

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
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Mot de passe (jjmmaaaa) : </label>
          <input
            type="password"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      {erreur && <p className="error-message">{erreur}</p>}
    </div>
  );
}

export default IdProf;

