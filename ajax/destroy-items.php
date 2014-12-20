<?php
require(__dir__."/../inc/config.php");	
$connection -> query("DELETE FROM items_matches WHERE items_id = 1");
// $query = $connection -> query("SELECT DISTINCT matches.id,matches.name,matches.color,matches.price,matches.used,matches.image FROM `matches` JOIN `items_matches` ON items_matches.matches_id = matches.id WHERE items_matches.items_id = 1");
// $connection -> close();
// $array = $query -> fetch_assoc();
?> 
