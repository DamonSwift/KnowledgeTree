<HTML>
<HEAD>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
</HEAD>
<BODY>
  
</BODY>
</HTML>

<?php
  //header("Cache-Control: no-cache, must-revalidate");
  $server = $_POST["server"];
  $user = $_POST["user"];
  $password = $_POST["password"];

  //数据库连接
  $conn = mysql_connect($server, $user, $password);
  if(!$conn) {
  	die("Connection Failed: " . mysql_error());
  }
  else {
    echo "succeeded</br>";
  }

  //数据库名称
  $dbname = "phoenix1917";
  $tabKnowTree = "KnowledgeTree";
  $tabKnowNode = "KnowledgeNode";

  mysql_select_db($dbname, $conn) or die("Invalid Database!");
  //SET NAMES显示客户端发送的SQL语句中使用什么字符集
  mysql_query("SET NAMES 'utf8'");

  $sql = "SELECT * FROM $tabKnowNode";
  $result = mysql_query($sql);
  while($row = mysql_fetch_array($result)) {
    echo $row["NodeID"] . ", " . $row["ParentID"] . ", " . $row["NodeName"] . "</br>";
  }

?>

