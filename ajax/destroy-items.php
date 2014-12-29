<?php
require(__dir__."/../inc/config.php");	

$primary_id = intval($_POST['primary_item_id']);

$connection -> query("DELETE FROM items_matches WHERE items_id = ".$primary_id."");
?> 
