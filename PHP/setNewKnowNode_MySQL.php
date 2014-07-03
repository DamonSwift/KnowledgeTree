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

  $parentID = $_POST["pId"];
  $id = $_POST["id"];
  if(!$id) { //首先使数据库创建一条记录，分配节点ID号
    $sql = "SELECT TreeName FROM $tabKnowNode WHERE NodeID = $parentID";
    $result = mysql_query($sql, $conn);
    $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
            VALUES (
              '" . $result . "', 
              '', 
              '" . $_POST["pId"] . "', 
              '', 
              '', 
              '', 
              'false'
            )";
    $result = mysql_query($sql, $conn);
  }
  else { //修改名称后更新

  }

?>
