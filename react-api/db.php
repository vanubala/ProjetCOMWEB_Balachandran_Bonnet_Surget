<?php
// ----------Innitialisation des variables utilisateur----------
$host = "localhost";
$user = "vbalachandr";
$password = "BlaBlaBla25";
$db = "vbalachandr";

// ----------Connexion à la base de donnée----------
$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
/* Paramètres de connexion une fois sur zzz.phpmyadmin
$host = 'localhost';        
$dbname = 'votre identifiant';
$username = 'votre identifiant';
$password = 'votre mdp de la partie base de donnée du zzz'; */
?>

