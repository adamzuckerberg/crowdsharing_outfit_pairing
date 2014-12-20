<?php
require(__dir__."/../inc/config.php");	
$connection -> query("INSERT INTO items_matches (items_id,matches_id) VALUES (1,'".$_GET['item_id']."')");
$new_item = $connection -> query("SELECT id, image FROM matches WHERE id = ".($_GET['item_id']+1)." LIMIT 1");
$connection -> close();

$array_new_item_to_match = $new_item -> fetch_assoc();
header("Content-Type: application/json");
echo json_encode(array('item_id'=>intval($array_new_item_to_match['id']),'image'=>'images/matches/'.$array_new_item_to_match['image']));
?> 