<?php
require(__dir__."/../inc/config.php"); 

try {
	$all_items = $connection->query("SELECT DISTINCT matches.id, name, price, color, used, image FROM matches JOIN items_matches ON matches.id = items_matches.matches_id WHERE matches.id = items_matches.matches_id");
}  catch (Exception $e) {
	echo "Data could not be retrieved from database.";
   	echo "Failed: " . $e->getMessage();
	exit;
}

$array = $all_items->fetchAll(PDO::FETCH_ASSOC);
// echo "<pre>";
// var_dump($array);
header("Content-Type: application/json");
echo json_encode($array);
// echo json_encode(array('item_id'=>intval($array['id']),'item_name'=>($array['name']),'item_price'=>($array['price']),'item_color'=>($array['color']),'item_used'=>($array['used']),'item_image'=>'images/matches/'.$array['image']));
// echo json_encode(array('item_id'=>($array['id'])));
?> 
