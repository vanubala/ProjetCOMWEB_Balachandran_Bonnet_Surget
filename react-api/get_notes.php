<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include "db.php";

$sql = "SELECT * FROM etudiant";
$result = $conn->query($sql);

$notes = array();
while($row = $result->fetch_assoc()) {
    $notes[] = $row;
}

echo json_encode($notes);
?>
