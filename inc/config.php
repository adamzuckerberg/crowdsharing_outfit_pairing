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
  $connection = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME,DB_USER,DB_PASS);
  // $connection = new PDO(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
  $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch (Exception $e)  {
   echo "Failed: " . $e->getMessage();
  exit;
}

?>