<?php
require(__dir__."/../inc/config.php");	
$connection -> query("SELECT DISTINCT matches.id,matches.name,matches.color,matches.price,matches.used,matches.image FROM `matches` JOIN `items_matches` ON items_matches.matches_id = matches.id WHERE items_matches.items_id = 1 ORDER BY matches.id DESC LIMIT 1");
$connection -> close();
$array = $new_item -> fetch_assoc();
header("Content-Type: application/json");
echo json_encode(array('item_id'=>intval($array['id']),'image'=>'images/matches/'.$array['image']));
?> 

