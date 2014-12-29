<?php
require(__dir__."/../inc/config.php");

$primary_item_id = intval($_POST['primary_item_id']); 

$count = $connection->query("SELECT id FROM items ORDER BY id DESC LIMIT 1");
		if ($primary_item_id >= $count->fetchColumn(0)) {
			$primary_item_id = 0;
		}

try {
	$new_item = $connection->query("SELECT id, name, price, used, image FROM items WHERE id = ".($primary_item_id+1)." LIMIT 1");
}  catch (Exception $e) {
	echo "Data could not be retrieved from database.";
   	echo "Failed: " . $e->getMessage();
	exit;
}

$array_new_item = $new_item->fetch(PDO::FETCH_ASSOC);
header("Content-Type: application/json");
echo json_encode(array('primary_item_id'=>intval($array_new_item['id']),'item_name'=>$array_new_item['name'],'item_condition'=>$array_new_item['used'],'item_price'=>number_format((float)$array_new_item['price'], 2, '.', ''),'image'=>'images/items/'.$array_new_item['image']));

?> 