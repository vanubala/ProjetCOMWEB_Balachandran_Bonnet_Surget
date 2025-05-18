<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// ----------Connexion à la base de donnée----------
include "db.php";

// ----------Récupération des données via une requête----------
$sql = "SELECT * FROM etudiant";
$result = $conn->query($sql);


// ----------Mise en forme des données récupérées dans un tableau notes----------
$notes = array();
while($row = $result->fetch_assoc()) {
    $notes[] = $row;
}

echo json_encode($notes);
?>
