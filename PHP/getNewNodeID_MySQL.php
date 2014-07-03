<?php
  //数据库登录信息
  $server = "localhost";
  $user = "phoenix1917";
  $password = "111";

  //数据库名称
  $dbname = "phoenix1917";
  $tabKnowTree = "KnowledgeTree";
  $tabKnowNode = "KnowledgeNode";

  //数据库连接
  $conn = mysql_connect($server, $user, $password);
  if(!$conn) die("Connection Failed!");
  mysql_select_db($dbname, $conn) or die("Invalid Database!");
  //SET NAMES显示客户端发送的SQL语句中使用什么字符集
  mysql_query("SET NAMES 'utf8'");

  $sql = "";
?>