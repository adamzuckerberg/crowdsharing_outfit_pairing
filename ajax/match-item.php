<?php
require(__dir__."/../inc/config.php");
$connection -> query("INSERT INTO items_matches (items_id,matches_id) VALUES (1,'".$_POST['item_id']."')");

$match_item = intval($_POST['item_id']);
if ($match_item == 10) {
	$match_item = 0;
}

$new_item = $connection -> query("SELECT id, image FROM matches WHERE id = ".($match_item+1)." LIMIT 1");
$connection -> close();
$array_new_item = $new_item -> fetch_assoc();
header("Content-Type: application/json");
echo json_encode(array('item_id'=>intval($array_new_item['id']),'image'=>'images/matches/'.$array_new_item['image']));
?> 