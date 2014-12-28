<?php
require(__dir__."/../inc/config.php");

$primary_item_id = intval($_POST['item_id']); 

try {
	$new_item = $connection->query("SELECT id, image FROM items WHERE id = ".($primary_item_id+3)." LIMIT 1");
}  catch (Exception $e) {
	echo "Data could not be retrieved from database.";
   	echo "Failed: " . $e->getMessage();
	exit;
}

$array_new_item = $new_item->fetch(PDO::FETCH_ASSOC);
header("Content-Type: application/json");
echo json_encode(array('item_id'=>intval($array_new_item['id']),'image'=>'images/items/'.$array_new_item['image']));

?> 