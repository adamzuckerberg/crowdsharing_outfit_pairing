<?php
require(__dir__."/../inc/config.php"); 

$primary_item_id = intval($_POST['primary_item_id']);

try {
	$all_items = $connection->query("SELECT DISTINCT matches.id, name, price, color, used, image FROM matches JOIN items_matches ON matches.id = items_matches.matches_id WHERE matches.id = items_matches.matches_id");
}  catch (Exception $e) {
	echo "Data could not be retrieved from database.";
   	echo "Failed: " . $e->getMessage();
	exit;
}

$array = $all_items->fetchAll(PDO::FETCH_ASSOC);
header("Content-Type: application/json");
echo json_encode($array);
?> 
