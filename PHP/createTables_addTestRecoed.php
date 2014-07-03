<?php
  //数据库名称
  //define("_dbName", "phoenix1917");
  //define("_tabKnowTree", "KnowledgeTree");
  //define("_tabKnowNode", "KnowledgeNode");
  $dbName = "phoenix1917";
  $tabKnowTree = "KnowledgeTree";
  $tabKnowNode = "KnowledgeNode";

  //数据库登录信息
  $server = "localhost";
  $user = "phoenix1917";
  $password = "111";

  //数据库连接
  $conn = mysql_connect($server, $user, $password);
  if(!$conn) {
    die("Connection Failed! Script Stoped.");
  }
  else {
    echo "Connected!\nServer: $server\nUser: $user \n\n";
  }

  //删除数据库
  $sql = "DROP DATABASE $dbName";
  $result = mysql_query($sql, $conn);

  //若数据库不存在，则创建新数据库
  $sql = "CREATE DATABASE if not exists $dbName DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci";
  $result = mysql_query($sql, $conn);

  //A or B 语句：若A执行正确（为真），则不执行B；若A执行错误（返回0），则执行B
  //die 语句：返回字符串，输出，停止执行下面的程序。停止执行并显示指定的错误信息。
  mysql_select_db($dbName, $conn) or die("Invalid Database!");
  //设置客户端发送的SQL语句中使用 utf8 字符集
  mysql_query("SET NAMES 'utf8'");

  //若数据库中不存在知识树表或节点表，则创建新表
  //知识树表
  $sql = "CREATE TABLE if not exists $tabKnowTree(
    TreeName   varchar(50) PRIMARY KEY,
    Domain     varchar(50),
    CreateTime date,
    UpdateTime timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Comment    varchar(1000)
  )ENGINE = InnoDB DEFAULT CHARSET = utf8";
  $result = mysql_query($sql, $conn);

  //知识点表
  $sql = "CREATE TABLE if not exists $tabKnowNode(
    TreeName    varchar(50),
    NodeID      varchar(120) PRIMARY KEY,
    ParentID    varchar(120),
    NodeName    varchar(50),
    NodeMeaning varchar(200),
    MeanType    int(3),
    IsParent    tinyint(1),
    CONSTRAINT FOREIGN KEY(TreeName) REFERENCES KnowledgeTree(TreeName) ON DELETE CASCADE ON UPDATE CASCADE
  )ENGINE = InnoDB DEFAULT CHARSET = utf8";
  $result = mysql_query($sql, $conn);

  //添加测试树
  $sql = "INSERT INTO $tabKnowTree (TreeName, Domain, CreateTime, UpdateTime, Comment)
          VALUES ('第二炮兵知识树', '中文概念库', '" . date("Y-m-d") . "', CURRENT_TIMESTAMP, '将第二炮兵的知识聚集在这儿')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowTree (TreeName, Domain, CreateTime, UpdateTime, Comment)
          VALUES ('常识知识', '中文概念库', '" . date("Y-m-d") . "', CURRENT_TIMESTAMP, '用于语言理解中知识运用')";
  $result = mysql_query($sql,$conn);

  //添加测试节点
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0000', '第二炮兵知识树', '武器', '武器_1', '102', '1')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '00000000', '0000', '常规导弹', '常规导弹_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '00000001', '0000', '战略导弹', '战略导弹_1', '102', '1')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '000000010000', '00000001', '战略弹道导弹', '202', '103', '1')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0000000100000000', '000000010000', '洲际导弹', '洲际导弹_1', '102', '1')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '00000001000000000000', '0000000100000000','东风-41', '东风-41_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '00000001000000000001', '0000000100000000', '东风-31', '东风-31_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0000000100000001', '000000010000', '远程导弹', '204', '103', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0000000100000002', '000000010000', '中程导弹', '中程导弹_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '000000010001', '00000001', '战略巡航导弹', '203', '103', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0001', '第二炮兵知识树', '气象条件', '201', '103', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0003', '第二炮兵知识树', '目标', '目标_1', '102', '1')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '00030000', '0003', '台湾', '台湾_1', '102', '1')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '000300000000', '00030000', '机场', '机场_1', '102', '1')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0003000000000000', '000300000000', '台中', '台中_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0003000000000001', '000300000000', '桃园', '桃园_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0003000000000002', '000300000000', '基隆', '基隆_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '000300000001', '00030000', '港口', '港口_1', '102', '1')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0003000000010000', '000300000001', '基隆', '基隆_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0003000000010001', '000300000001', '花莲', '花莲_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '000300000002', '00030000', '建筑', '建筑_1', '102', '1')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0003000000020000', '000300000002', '总统府', '总统府_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0003000000020001', '000300000002', '国防部', '国防部_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0003000000020002', '000300000002', '民进党党部', '213', '103', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0003000000020003', '000300000002', '总理', '总理_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '0004', '第二炮兵知识树', '分层信息', '分_1', '102', '1')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '00040000', '0004', '水系', '水系_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '00040001', '0004', '道路', '道路_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '00040002', '0004', '居民点', '居民点_1', '102', '0')";
  $result = mysql_query($sql,$conn);
  $sql = "INSERT INTO $tabKnowNode (TreeName, NodeID, ParentID, NodeName, NodeMeaning, MeanType,IsParent)
          VALUES ('第二炮兵知识树', '00040003', '0004', '边界', '边界_1', '102', '0')";
  $result = mysql_query($sql,$conn);

  echo "Reset Complete!";

?>

