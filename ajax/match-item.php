<?php
require(__dir__."/../inc/config.php");	
$connection -> query("INSERT INTO items_matches (items_id,matches_id) VALUES ('".$_GET['item_id']."','".$_GET['match_id']."')");
$query = $connection -> query("SELECT id, image FROM matches WHERE id = ".($_GET['item_id']+1)." LIMIT 1");
$connection -> close();
$array = $query -> fetch_assoc();
header("Content-Type: application/json");
echo json_encode(array('item_id'=>intval($array['id']),'image'=>'images/matches/'.$array['image']));
?> 