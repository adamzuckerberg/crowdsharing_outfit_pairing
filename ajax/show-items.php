<?php
require(__dir__."/../inc/config.php"); 

$primary_item_id = intval($_POST['primary_item_id']);

try {
	$all_items = $connection->query('SELECT DISTINCT items_matches.matches_id, name, price, color, used, image FROM matches JOIN items_matches ON matches.id = items_matches.matches_id WHERE items_matches.items_id = '.$primary_item_id.'');
}  catch (Exception $e) {
	echo "Data could not be retrieved from database.";
   	echo "Failed: " . $e->getMessage();
	exit;
}

$array = $all_items->fetchAll(PDO::FETCH_ASSOC);
header("Content-Type: application/json");
echo json_encode($array);
?> 
