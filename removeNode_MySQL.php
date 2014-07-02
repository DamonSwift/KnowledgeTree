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

  // $removeID = $_POST["id"];
  // $clearChildrenFlag = $_POST["clearChildrenOnly"];
  $removeID = "0000";
  $clearChildrenFlag = false;

  if($clearChildrenFlag) { //清除子结点模式
    $sql = "UPDATE $tabKnowNode SET isParent = 'false' WHERE NodeID = '$removeID'";
    $result = mysql_query($sql, $conn);
    //子结点的子结点也要清除
     do {
      $sql = "SELECT NodeID FROM $tabKnowNode WHERE ParentID = '$removeID'";
      $result = mysql_query($sql, $conn);
      $nextRemoveID = mysql_fetch_array($result);  //这里可能会查询出多个
      $sql = "DELETE FROM $tabKnowNode WHERE ParentID = '$removeID'";
      $result = mysql_query($sql, $conn);
      $removeID = $nextRemoveID;
     } while(mysql_affected_rows($result))
  }
  else { //清除节点模式
    $sql = "DELETE FROM $tabKnowNode WHERE NodeID = '$removeID' OR ParentID = '$removeID'";
    //该节点以下的所有节点全部要清除
    $result = mysql_query($sql, $conn);
  }
  $sql = "DELETE FROM $tabKnowTree WHERE TreeName = '$removeID'";
  $result = mysql_query($sql, $conn);

  //递归实现层级节点的删除
  function removeNode() {
    
  }

?>