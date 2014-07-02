<?php
  header("Cache-Control: no-cache, must-revalidate");
  $server = $_POST["server"];
  $user = $_POST["user"];
  $password = $_POST["password"];

  //数据库连接
  $conn = mysql_connect($server, $user, $password);
  if(!$conn) {
  	die("Connection Failed: " . mysql_error());
  }
  else {
  	echo "succeeded";
  }
?>