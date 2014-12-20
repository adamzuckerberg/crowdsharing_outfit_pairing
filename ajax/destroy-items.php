<?php
require(__dir__."/../inc/config.php");	
$connection -> query("DELETE FROM items_matches WHERE items_id = 1");
$connection -> close();
?> 
<script>
window.location.reload();
</script>