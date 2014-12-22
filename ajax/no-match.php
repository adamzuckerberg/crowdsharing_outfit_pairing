<?php
require(__dir__."/../inc/config.php");

$match_item = intval($_POST['item_id']);
if ($match_item == 10) {
	$match_item = 0;
}

try {
	$new_item = $connection->query("SELECT id, image FROM matches WHERE id = ".($match_item+1)." LIMIT 1");
}  catch (Exception $e) {
	echo "Data could not be retrieved from database.";
   	echo "Failed: " . $e->getMessage();
	exit;
}

$array_new_item = $new_item->fetch(PDO::FETCH_ASSOC);
header("Content-Type: application/json");
echo json_encode(array('item_id'=>intval($array_new_item['id']),'image'=>'images/matches/'.$array_new_item['image']));

?> 