[<?php
  //Tips：
  //所有的输出应包含在“［］”中，输出将赋值给responseText，zTree自动加载。所以本文档的php标签包含在一组"[]"之中。
  //异步加载要点：
  //$.fn.zTree.init初始化时不要写入zNodes参数
  //setting.async.enable打开
  //setting.async.contentType设为默认
  //setting.async.url链接到本文件
  //setting.async.dataFilter函数句柄设置好（可以不设）
  //---------------------------
  
  $pId = "";
  $pName = "";

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

  //扩展：使用输入框进行数据库登录

  //请求NodeID, NodeName对应节点的子节点数据
  if(array_key_exists('NodeID', $_REQUEST)) {
    $pId = $_REQUEST['NodeID'];
  }
  if(array_key_exists('NodeName', $_REQUEST)) {
    $pName = $_REQUEST['NodeName'];
  }
  
  if($pId == null || $pId == "") {
    //对知识树（根节点）的处理
    $sql = "SELECT * FROM $tabKnowTree";
    $result = mysql_query($sql, $conn);
    while($row = mysql_fetch_array($result)) {
      echo "{ id: \"" . $row['TreeName'] . "\", 
              pId: \"0\", 
              name: \"" . $row['TreeName'] . "\",
              isParent: \"true\"
            }, ";
    }
  }
  else {
    //加载节点
    $sql = "SELECT * FROM $tabKnowNode WHERE ParentID = '$pId'"; 
    $result = mysql_query($sql, $conn);
    while($row = mysql_fetch_array($result)) {
      $isParent = ($row['IsParent'] == "1")? "true":"false";
      echo "{ id: \"" . $row['NodeID'] . "\", 
              pId: \"" . $row['ParentID'] . "\", 
              name: \"" . $row['NodeName'] . "\",
              isParent: \"" . $isParent . "\"
            }, "; 
    }
  }


//----------
//   TEST 
//---------- 
//节点数据Demo（JSON）
// var zNodes =[
//   { id:1, pId:0, name:"父节点 1", open:true},
//   { id:11, pId:1, name:"叶子节点 1-1"},
//   { id:12, pId:1, name:"叶子节点 1-2"},
//   { id:13, pId:1, name:"叶子节点 1-3"},
//   { id:2, pId:0, name:"父节点 2", open:true},
//   { id:21, pId:2, name:"叶子节点 2-1"},
//   { id:22, pId:2, name:"叶子节点 2-2"},
//   { id:23, pId:2, name:"叶子节点 2-3"},
//   { id:3, pId:0, name:"父节点 3", open:true},
//   { id:31, pId:3, name:"叶子节点 3-1"},
//   { id:32, pId:3, name:"叶子节点 3-2"},
//   { id:33, pId:3, name:"叶子节点 3-3"}
// ];

?>]