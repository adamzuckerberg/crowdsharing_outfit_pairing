<?php

// development
  define("DB_SERVER","localhost");
  define("DB_USER","root");
  define("DB_PASS","root");
  define("DB_NAME","tradesy");

// production
  // define("DB_SERVER","localhost");
  // define("DB_USER","ecstati5_admin");
  // define("DB_PASS","ontology");
  // define("DB_NAME","ecstati5_tradesy");

try {
  $connection = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);  
} catch (Exception $e)  {
    die("Database connection failed: " . mysqli_connect_error() ." ( " . mysqli_connect_errno() . ")");
  exit;
}

?>