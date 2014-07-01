<!--
 * Create Time: 2014-07-01
 * Update Time: 2014-07-01 15:39:56
 -->
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

  $sql = "INSERT INTO $tabKnowTree (TreeName, Domain, CreateTime, UpdateTime, Comment)
          VALUES (
            '" . $_POST["name"] . "', 
            '中文概念库', 
            '" . date("Y-m-d") . "', 
            '" . date("Y-m-d H:i:s") . "', 
            ''
          )";
  $result = mysql_query($sql,$conn);
  
?>