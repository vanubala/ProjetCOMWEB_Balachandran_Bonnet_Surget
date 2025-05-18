<?php
// ----------Cnnitialisation des variables utilisateur----------
$host = "localhost";
$user = "root";
$password = "";
$db = "etablissement";

// ----------Connexion à la base de donnée----------
$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
