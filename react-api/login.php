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
    $stmt = $conn->prepare("SELECT * FROM etudiant WHERE Identifiant = ?");
    $stmt->bind_param("s", $identifiant);
    $stmt->execute();
    $result = $stmt->get_result();

    // Vérifier si l'utilisateur existe
    if ($row = $result->fetch_assoc()) {
        $date = $row['Date_Naissance']; // Ex: 2007-05-03
        $dateSplit = explode('-', $date);
        $dateFormatee = $dateSplit[2] . $dateSplit[1] . $dateSplit[0]; // 03052007

        // Vérification du mot de passe
        if ($motDePasse === $dateFormatee) {
            echo json_encode([
                "etudiant" => $row, // Contient toutes les infos de l'étudiant
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
