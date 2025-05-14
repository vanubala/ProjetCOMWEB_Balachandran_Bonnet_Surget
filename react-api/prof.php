<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

// Connexion à la BDD
include "db.php";

// Récupération des données envoyées par le front
$identifiant = $_POST['identifiant'] ?? '';
$motDePasse = $_POST['motDePasse'] ?? '';

if (!empty($identifiant) && !empty($motDePasse)) {
    // Préparer la requête
    $stmt = $conn->prepare("SELECT * FROM prof WHERE Identifiant = ?");
    $stmt->bind_param("s", $identifiant);
    $stmt->execute();
    $result = $stmt->get_result();

    //Préparer deuxième requête pour accéder aux notes des élèves
    $etudiants = [];
    $reqEtudiants = $conn->query("SELECT * FROM etudiant");
    if ($reqEtudiants) {
        while ($e = $reqEtudiants->fetch_assoc()) {
            $etudiants[] += $e;
        }
    }

    // Vérifier si l'utilisateur existe
    if ($row = $result->fetch_assoc()) {
        $date = $row['Date_Naissance']; 
        $dateSplit = explode('-', $date);
        $dateFormatee = $dateSplit[2] . $dateSplit[1] . $dateSplit[0];

        // Vérification du mot de passe
        if ($motDePasse === $dateFormatee) {
            echo json_encode([
                "prof" => $row, // Contient toutes les infos du prof
                "notes" => $etudiants, //Contient toutes les notes 
                "success" => true,
            ]);
        } else {
            echo json_encode(["success" => false, "message" => "Mot de passe incorrect."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Identifiant introuvable."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Champs manquants."]);
}
?>
