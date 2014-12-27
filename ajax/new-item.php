<?php
require(__dir__."/../inc/config.php");

$primary_id = intval($_POST['primary_id']);
$primary_name = $_POST['primary_name'];
$primary_price = $_POST['primary_price'];
$primary_color = $_POST['primary_color'];
$primary_used = $_POST['primary_used'];
// $primary_image = $_POST['primary_image'];

try {
	$results = $connection->prepare("INSERT INTO items (name,price,color,used,image) VALUES (?,?,?,?)");
	$results->bindParam(1,$primary_name);
	$results->bindParam(2,$primary_price);
	$results->bindParam(3,$primary_color);
	$results->bindParam(4,$primary_used);
	// $results->bindParam(5,$primary_image);	
	$results->execute();
}  catch (Exception $e) {
	echo "Data could not be inserted into database.";
   	echo "Failed: " . $e->getMessage();
	exit;
}

try {
	$new_item = $connection->query("SELECT id, image FROM items WHERE id = ".$primary_id+1." LIMIT 1");
}  catch (Exception $e) {
	echo "Data could not be retrieved from database.";
   	echo "Failed: " . $e->getMessage();
	exit;
}

$array_new_item = $new_item->fetch(PDO::FETCH_ASSOC);
header("Content-Type: application/json");
echo json_encode(array('item_id'=>intval($array_new_item['id']),'image'=>'images/matches/'.$array_new_item['image']));

?> 
