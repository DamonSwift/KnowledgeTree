//zTree全部属性设置
var setting = {
  //全局句柄(不允许初始化或修改)
  // treeId: "", //zTree的唯一标识
  // treeObj: null, //zTree容器的jQuery对象
  
  //异步设置
  async: {
    autoParam  : ["id=NodeID", "name=NodeName"], //异步加载时需要自动提交父节点属性的参数
    contentType: "application/x-www-form-urlencoded", //Ajax 提交参数的数据类型
    dataFilter : null, //用于对 Ajax 返回数据进行预处理的函数
    dataType   : "text", //Ajax 获取的数据类型
    enable     : true, //设置 zTree 是否开启异步加载模式
    otherParam : [], //Ajax 请求提交的静态参数键值对
    type       : "post", //Ajax 的 http 请求模式
    url        : "getNodes_MySQL.php" //Ajax 获取数据的 URL 地址
  },

  //回调函数
  callback: {
    // before...参数，用于捕获某项操作进行之前的事件回调函数，并根据返回值确定：
    // 1. 是否允许进行该操作
    // 2. 触发该事件的回调函数(由on...参数定义)
    beforeAsync     : beforeAsync, //异步加载之前－是否允许进行异步加载
    beforeCheck     : null, //勾选 或 取消勾选 之前－是否允许 勾选 或 取消勾选
    beforeClick     : null, //单击节点之前－是否允许单击操作
    beforeCollapse  : null, //父节点折叠之前－是否允许折叠操作
    beforeDblClick  : null, //zTree 上鼠标双击之前－触发 onDblClick 事件回调函数
    beforeDrag      : beforeDrag, //节点被拖拽之前－是否允许开启拖拽操作
    beforeDragOpen  : null, //拖拽节点移动到折叠状态的父节点后，即将自动展开该父节点之前－是否允许自动展开操作
    beforeDrop      : null, //节点拖拽操作结束之前－是否允许此拖拽操作
    beforeEditName  : null, //节点编辑按钮的 click 事件－是否允许进入名称编辑状态
    beforeExpand    : null, //父节点展开之前－是否允许展开操作
    beforeMouseDown : null, //zTree 上鼠标按键按下之前－触发 onMouseDown 事件回调函数
    beforeMouseUp   : null, //－zTree 上鼠标按键松开之前－触发 onMouseUp 事件回调函数
    beforeRemove    : beforeRemove, //节点被删除之前－是否允许删除操作
    beforeRename    : beforeRename, //节点编辑名称结束（Input 失去焦点 或 按下 Enter 键）之后，更新节点名称数据之前－是否允许更改名称的操作
    beforeRightClick: null, //zTree 上鼠标右键点击之前－触发 onRightClick 事件回调函数

    // on...参数，用于捕获某事件的回调函数（注释格式：1. --2. ）
    // 1. 事件名称
    // 2. 无法触发的条件：设置了某方法，且返回false（若为null则没有此条件）
    onAsyncError  : onAsyncError, //异步加载出现异常错误－ beforeAsync
    onAsyncSuccess: onAsyncSuccess, //异步加载正常结束－ beforeAsync
    onCheck       : null, //checkbox / radio 被勾选 或 取消勾选－ beforeCheck
    onClick       : null, //节点被点击－ beforeClick
    onCollapse    : null, //节点被折叠－ beforeCollapse
    onDblClick    : null, //zTree 上鼠标双击之后－ beforeDblClick
    onDrag        : null, //节点被拖拽－ beforeDrag
    onDragMove    : null, //节点被拖拽过程中（捕获 zTree 节点拖拽到的 DOM，从而操作对应的 DOM）－ null
    onDrop        : null, //节点拖拽操作结束－ beforeDrop
    onExpand      : null, //节点被展开－ beforeExpand
    onMouseDown   : null, //zTree 上鼠标按键按下后－ beforeMouseDown
    onMouseUp     : null, //zTree 上鼠标按键松开后－ beforeMouseUp
    onNodeCreated : null, //节点生成 DOM 后（对父节点未展开的子节点，初始化后不会触发此回调函数，直到其父节点被展开）－ null
    onRemove      : onRemove, //删除节点之后－ beforeRemove
    onRename      : null, //节点编辑名称结束之后，或取消编辑状态－ beforeRename
    onRightClick  : null //zTree 上鼠标右键点击之后－ beforeRightClick
  },

  //选择框设置
  check: {
    autoCheckTrigger  : false, //自动关联勾选时是否触发 beforeCheck / onCheck 事件回调函数
    chkboxType        : {"Y": "ps", "N": "ps"}, //勾选 checkbox 对于父子节点的关联关系
    chkStyle          : "checkbox", //勾选框类型(checkbox 或 radio）（初始化后不可改变）
    enable            : false, //设置 zTree 的节点上是否显示 checkbox / radio（初始化后不可改变）
    nocheckInherit    : false, //当父节点设置 nocheck = true 时，设置子节点是否自动继承 nocheck = true（仅用于初始化） 
    chkDisabledInherit: false, //当父节点设置 chkDisabled = true 时，设置子节点是否自动继承 chkDisabled = true（仅用于初始化） 
    radioType         : "level" //radio 的分组范围(level 或 all)（初始化后不可改变）
  },

  //数据设置
  data: {
    keep: {
      leaf  : false, //zTree 的节点叶子节点属性锁，如果设置为 true，则所有 isParent = false 的节点，都无法添加子节点
      parent: false //zTree 的节点父节点属性锁，如果设置为 true，则所有 isParent = true 的节点，即使该节点的子节点被全部删除或移走，依旧保持父节点状态
    },
    key: {  //zTree节点的数据是可以DIY的，在这里可以将自己设定的属性名称与zTree对应的功能绑定
      checked : "checked", //zTree 节点数据中保存 check 状态的属性名称
      children: "children", //zTree 节点数据中保存子节点数据的属性名称
      name    : "name", //zTree 节点数据保存节点名称的属性名称
      title   : "", //zTree 节点数据保存节点提示信息的属性名称
      url     : "url" //zTree 节点数据保存节点链接的目标 URL 的属性名称
    },
    simpleData: {
      enable : true, //确定 zTree 初始化时的节点数据、异步加载时的节点数据、或 addNodes 方法中输入的 newNodes 数据是否采用简单数据模式 (Array)。不需要用户再把数据库中取出的 List 强行转换为复杂的 JSON 嵌套格式
      idKey  : "id", //节点数据中保存唯一标识的属性名称
      pIdKey : "pId", //节点数据中保存其父节点唯一标识的属性名称
      rootPId: "" //用于修正根节点父节点数据，即 pIdKey 指定的属性值
    }
  },

  //编辑设置
  edit: {
    drag: {
      autoExpandTrigger: true, //拖拽时父节点自动展开是否触发 onExpand 事件回调函数
      isCopy           : true, //拖拽时, 设置是否允许复制节点
      isMove           : true, //拖拽时, 设置是否允许移动节点
      prev             : true, //拖拽到目标节点时，设置是否允许移动到目标节点前面的操作
      next             : true, //拖拽到目标节点时，设置是否允许移动到目标节点后面的操作
      inner            : true, //拖拽到目标节点时，设置是否允许成为目标节点的子节点
      borerMax         : 10, //拖拽节点成为根节点时的 Tree 内边界范围 (单位：px)
      borderMin        : -5, //拖拽节点成为根节点时的 Tree 外边界范围 (单位：px)
      minMoveSize      : 5, //判定是否拖拽操作的最小位移值 (单位：px)
      maxShowNodeNum   : 5, //拖拽多个兄弟节点时，浮动图层中显示的最大节点数。多余的节点用...代替
      autoOpenTime     : 500 //拖拽时父节点自动展开的延时间隔(单位：ms)
    },
    editNameSelectAll: false, //节点编辑名称 input 初次显示时,设置 txt 内容是否为全选状态
    enable           : true, //设置 zTree 是否处于可编辑状态
    removeTitle      : "remove", //删除按钮的 Title 辅助信息（鼠标移动到 删除按钮 上时，浏览器自动弹出的辅助信息内容）
    renameTitle      : "rename", //编辑名称按钮的 Title 辅助信息（设置鼠标移动到 编辑名称按钮 上时，浏览器自动弹出的辅助信息内容）
    showRemoveBtn    : false, //设置是否在节点右侧显示删除按钮
    showRenameBtn    : false //设置是否在节点右侧显示编辑名称按钮
  },

  //视图属性
  view: {
    addDiyDom         : null, //用于在节点上固定显示用户自定义（DIY）控件，这是函数句柄入口
    addHoverDom       : null, //用于当鼠标移动到节点上时，显示用户自定义控件，显示隐藏状态同 zTree 内部的编辑、删除按钮，这是函数句柄入口
    autoCancelSelected: true, //点击节点时，按下 Ctrl 或 Cmd 键是否允许取消选择操作
    dblClickExband    : true, //双击节点时，是否自动展开父节点的标识
    expandSpeed       : "fast", //zTree 节点展开、折叠时的动画速度，设置方法同 JQuery 动画效果中 speed 参数
    fontCss           : {}, //个性化文字样式，只针对 zTree 在节点上显示的<A>对象
    nameIsHTML        : false, //设置 name 属性是否支持 HTML 脚本
    removeHoverDom    : null, //用于当鼠标移出节点时，隐藏用户自定义控件，显示隐藏状态同 zTree 内部的编辑、删除按钮
    selectedMulti     : false, //设置是否允许同时选中多个节点
    showIcon          : true, //设置 zTree 是否显示节点的图标
    showLine          : true, //设置 zTree 是否显示节点之间的连线
    showTitle         : true, //设置 zTree 是否显示节点的 title 提示信息(即节点 DOM 的 title 属性)
    txtSelectedEnable : false //设置 zTree 是否允许可以选择 zTree DOM 内的文本
  }
}; 

//节点对象
// treeNode: {
//   checked          , //节点的 checkBox / radio 的 勾选状态
//   children         , //节点的子节点数据集合
//   chkDisabled      , //设置节点的 checkbox / radio 是否禁用
//   click            , //最简单的 click 事件操作。相当于 onclick="..." 的内容
//   getCheckStatus   , //获取节点 checkbox / radio 半勾选状态
//   getNextNode      , //获取与 treeNode 节点相邻的后一个节点
//   getParentNode    , //获取 treeNode 节点的父节点
//   getPreNode       , //获取与 treeNode 节点相邻的前一个节点
//   halfCheck        , //强制节点的 checkBox / radio 的 半勾选状态
//   icon             , //节点自定义图标的 URL 路径
//   iconClose        , //父节点自定义折叠时图标的 URL 路径
//   iconOpen         , //父节点自定义展开时图标的 URL 路径
//   iconSkin         , //节点自定义图标的 className
//   isHidden         , //判断 treeNode 节点是否被隐藏
//   isParent         , //记录 treeNode 节点是否为父节点
//   name             , //节点名称
//   nocheck          , //设置节点是否隐藏 checkbox / radio
//   open             , //记录 treeNode 节点的 展开 / 折叠 状态
//   target           , //设置点击节点后在何处打开 url
//   url              , //节点链接的目标 URL
//   *DIY*            , //用于保存节点的其他自定义数据信息，不要与 zTree 使用的属性相同即可，用户可随意设定

//   //以下是不可初始化的字段
//   check_Child_State, //用于记录节点的子节点的 checkBox / radio 的半选状态（不可初始化或随意修改）
//   check_Focus      , //用于记录节点的 checkBox / radio 的 focus 状态（不可初始化或随意修改）
//   checkedOld       , //节点的 checkBox / radio 在初始化时的 勾选状态（自动初始化）
//   editNameFlag     , //用于记录节点是否处于编辑名称状态（不可初始化或随意修改）
//   isAjaxing        , //记录 treeNode 节点是否正在进行异步加载（自动初始化）
//   isFirstNode      , //记录 treeNode 节点是否为同级节点中的第一个节点（自动初始化）
//   isHover          , //记录节点 的 hover 状态，主要用于 setting.view.addHoverDom / removeHoverDom（不可初始化或随意修改）
//   isLastNode       , //记录 treeNode 节点是否为同级节点中的最后一个节点（自动初始化）
//   level            , //记录节点的层级（自动初始化）
//   parentTId        , //treeNode 节点的父节点唯一标识 tId（自动初始化）
//   tId              , //treeNode 节点的唯一标识 tId（自动初始化）
//   zAsync             //记录 treeNode 节点是否已经进行过异步加载，避免父节点反复异步加载数据（自动初始化）
// }

//zTree对象
// zTreeObj: {
//   setting              , //zTree 对象使用的 setting 配置数据
//   addNodes             , //添加节点
//   cancelEditName       , //取消节点的编辑名称状态，可以恢复原名称，也可以强行赋给新的名称
//   cancelSelectedNode   , //取消节点的选中状态
//   checkAllNodes        , //勾选 或 取消勾选 全部节点
//   checkNode            , //勾选 或 取消勾选 单个节点
//   copyNode             , //复制节点
//   destroy              , //销毁 zTree 对象的 zTreeObj 实例
//   editName             , //设置某节点进入编辑名称状态
//   expandAll            , //展开 / 折叠 全部节点
//   expandNone           , //展开 / 折叠 指定的节点
//   getChangeCheckedNodes, //获取输入框勾选状态被改变的节点集合（与原始数据 checkedOld 对比）
//   getCheckedNodes      , //获取输入框被勾选 或 未勾选的节点集合
//   getNodeByParam       , //根据节点数据的属性搜索，获取条件完全匹配的节点数据 JSON 对象
//   getNodeByTId         , //根据 zTree 的唯一标识 tId 快速获取节点 JSON 数据对象
//   getNodeIndex         , //获取某节点在同级节点中的序号（从0开始）
//   getNodes             , //获取 zTree 的全部节点数据
//   getNodesByFilter     , //根据自定义规则搜索节点数据 JSON 对象集合 或 单个节点数据
//   getNodesByParam      , //根据节点数据的属性搜索，获取条件完全匹配的节点数据 JSON 对象集合
//   getNodesByParamFuzzy , //根据节点数据的属性搜索，获取条件模糊匹配的节点数据 JSON 对象集合
//   getSelectedNodes     , //获取 zTree 当前被选中的节点数据集合
//   hideNode             , //隐藏某个节点
//   hideNodes            , //隐藏一批节点
//   moveNode             , //移动节点
//   reAsyncChildNodes    , //强行异步加载父节点的子节点
//   refresh              , //刷新 zTree（没有特殊必要，尽量不要使用此方法）
//   removeChildNodes     , //清空某父节点的子节点
//   removeNode           , //删除节点
//   selectNode           , //选中指定节点
//   setChkDisabled       , //禁用 或 解禁 某个节点的 checkbox / radio 
//   setEditable          , //设置 zTree 进入 / 取消 编辑状态
//   showNode             , //显示某个被隐藏的节点
//   showNodes            , //显示一批已经被隐藏的节点
//   transformToArray     , //将 zTree 使用的标准 JSON 嵌套格式的数据转换为简单 Array 格式
//   transformTozTreeNodes, //将简单 Array 格式数据转换为 zTree 使用的标准 JSON 嵌套数据格式
//   updateNode             //更新某节点数据，主要用于该节点显示属性的更新
// }

var log;
var className = "dark";
var newCount  = 1;
var demoMsg   = {
  async:"正在进行异步加载，请等一会儿再点击...",
  expandAllOver: "全部展开完毕",
  asyncAllOver: "后台异步加载完毕",
  asyncAll: "已经异步加载完毕，不再重新加载",
  expandAll: "已经异步加载完毕，使用 expandAll 方法"
};
var curStatus     = "init";
var curAsyncCount = 0;
var asyncForAll   = false;
var goAsync = false;

//Callbacks

//---------------------------
//Name: beforeDrag
//Trigger Condiditon: zTree event, execute before dragging a node.
//Function: authorizing drag operation.
//Create Time: 2014-06-24
//Update Time: 2014-06-24 11:35:36
//Comment: 
//---------------------------
function beforeDrag(treeId, treeNodes) {
  //允许拖拽操作
  return true;
}

//---------------------------
//Name: beforeRemove
//Trigger Condiditon: zTree event, execute before removing a node.
//Function: 弹出确认对花框，产生并显示log信息
//Create Time: 2014-06-24
//Update Time: 2014-06-24 11:35:28
//Comment: 
//---------------------------
function beforeRemove(treeId, treeNode) {
  className = (className === "dark" ? "":"dark");
  //产生log信息
  showLog("[ " + getTime() + " beforeRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
  //确认对话框
  return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
}

//---------------------------
//Name: onRemove
//Trigger Condiditon: zTree event, execute on removing a node.
//Function: 产生并显示log信息
//Create Time: 2014-06-24
//Update Time: 2014-06-24 11:41:54
//Comment: 
//---------------------------
function onRemove(e, treeId, treeNode) {
  //产生log信息
  showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
}

//---------------------------
//Name: beforeRename
//Trigger Condiditon: zTree event, execute brfore renaming a node.
//Function: 
//Create Time: 2014-06-25
//Update Time: 2014-06-25 15:33:44
//Comment: 
//---------------------------
function beforeRename(treeId, treeNode, newName) {
  //修改后节点名称为空时提示
  if (newName.length == 0) {
    alert("节点名称不能为空.");
    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
    //10毫秒后执行
    setTimeout(function(){zTree.editName(treeNode)}, 10);
    return false;
  }
  return true;
}

//---------------------------
//Name: beforeAsync
//Trigger Condiditon: zTree event, execute before asyncing node data.
//Function: 
//Create Time: 2014-06-25
//Update Time: 2014-06-25 15:33:54
//Comment: 
//---------------------------
function beforeAsync() {
  //每次异步加载节点前，计数变量自增
  curAsyncCount++;
}

//---------------------------
//Name: onAsyncSuccess
//Trigger Condiditon: zTree event, execute on async success.
//Function: 
//Create Time: 2014-06-25
//Update Time: 2014-06-25 15:34:02
//Comment: 
//---------------------------
function onAsyncSuccess(event, treeId, treeNode, msg) {
  curAsyncCount--;
  if (curStatus == "expand") {
    expandNodes(treeNode.children);
  } 
  else if(curStatus == "async") {
    asyncNodes(treeNode.children);
  }
  //
  if (curAsyncCount <= 0) {
    if (curStatus != "init" && curStatus != "") {
      //显示提示信息
      $("#demoMsg").text((curStatus == "expand") ? demoMsg.expandAllOver : demoMsg.asyncAllOver);
      asyncForAll = true;
    }
    curStatus = "";
  }
}

//---------------------------
//Name: onAsyncError
//Trigger Condiditon: zTree event, execute on async error.
//Function: 
//Create Time: 2014-06-25
//Update Time: 2014-06-25 17:34:39
//Comment: 
//---------------------------
function onAsyncError(event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown) {
  curAsyncCount--;
  //
  if (curAsyncCount <= 0) {
    curStatus = "";
    if (treeNode!=null) asyncForAll = true;
  }
}

//---------------------------
//Name: showLog
//Trigger Condiditon: 
//Function: 显示对应的提示信息
//Create Time: 2014-06-25
//Update Time: 2014-06-26 11:26:15
//Comment: 
//---------------------------
function showLog(str) {
  if (!log) log = $("#log");
  //追加一条信息
  log.append("<li class='"+className+"'>"+str+"</li>");
  //若满8条，删除第1条信息，使消息框信息滚动
  if(log.children("li").length > 8) {
    log.get(0).removeChild(log.children("li")[0]);
  }
}

//---------------------------
//Name: getTime
//Trigger Condiditon: 产生log信息时
//Function: 获取并返回当前的时、分、秒、毫秒
//Create Time: 2014-06-25
//Update Time: 2014-06-26 11:26:06
//Comment: 
//---------------------------
function getTime() {
  var now = new Date(),
  h  = now.getHours(),
  m  = now.getMinutes(),
  s  = now.getSeconds(),
  ms = now.getMilliseconds();
  //时:分:秒 毫秒
  return (h+":"+m+":"+s+ " " +ms);
}

//---------------------------
//Name: add
//Trigger Condiditon: 点击添加节点按钮
//Function: 
//Create Time: 2014-06-25
//Update Time: 2014-06-26 11:26:01
//Comment: 
//---------------------------
function add(event) {
  var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
  //event为事件对象的句柄，从其data属性中可以取出传递来的数据
  isParent  = event.data.isParent,
  nodes     = zTree.getSelectedNodes(),
  //排除多选带来的干扰：只对选中的第一个节点起作用
  treeNode  = nodes[0];
  if(treeNode) {
    treeNode = zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, isParent:isParent, name:"new node" + (newCount++)});
  } 
  else {
    treeNode = zTree.addNodes(null, {id:(100 + newCount), pId:0, isParent:isParent, name:"new node" + (newCount++)});
  }
  if(treeNode) {
    zTree.editName(treeNode[0]);
  } 
  else {
    alert("叶子节点被锁定，无法增加子节点");
  }
};

//---------------------------
//Name: edit
//Trigger Condiditon: 点击编辑节点按钮
//Function: 
//Create Time: 2014-06-25
//Update Time: 
//Comment: 
//---------------------------
function edit() {
  var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
  nodes     = zTree.getSelectedNodes(),
  treeNode  = nodes[0];
  if (nodes.length == 0) {
    alert("请先选择一个节点");
    return;
  }
  zTree.editName(treeNode);
};

//---------------------------
//Name: 
//Trigger Condiditon: 
//Function: 
//Create Time: 2014-06-25
//Update Time: 
//Comment: 
//---------------------------
function remove(e) {
  var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
  nodes = zTree.getSelectedNodes(),
  treeNode = nodes[0];
  if (nodes.length == 0) {
    alert("请先选择一个节点");
  return;
  }
  var callbackFlag = $("#callbackTrigger").attr("checked");
  zTree.removeNode(treeNode, callbackFlag);
};

//---------------------------
//Name: 
//Trigger Condiditon: 
//Function: 
//Create Time: 2014-06-25
//Update Time: 
//Comment: 
//---------------------------
function clearChildren(e) {
  var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
  nodes = zTree.getSelectedNodes(),
  treeNode = nodes[0];
  if (nodes.length == 0 || !nodes[0].isParent) {
    alert("请先选择一个父节点");
    return;
  }
  zTree.removeChildNodes(treeNode);
};

//---------------------------
//Name: 
//Trigger Condiditon: 
//Function: 
//Create Time: 2014-06-25
//Update Time: 
//Comment: 
//---------------------------
function check() {
  if (curAsyncCount > 0) {
    $("#demoMsg").text(demoMsg.async);
    return false;
  }
  return true;
}

//---------------------------
//Name: 
//Trigger Condiditon: 
//Function: 
//Create Time: 2014-06-25
//Update Time: 
//Comment: 
//---------------------------
function expandNodes(nodes) {
  if (!nodes) return;
  curStatus = "expand";
  var zTree = $.fn.zTree.getZTreeObj("treeDemo");
  for (var i=0, l=nodes.length; i<l; i++) {
    zTree.expandNode(nodes[i], true, false, false);
    if (nodes[i].isParent && nodes[i].zAsync) {
      expandNodes(nodes[i].children);
    } else {
      goAsync = true;
    }
  }
}

//---------------------------
//Name: 
//Trigger Condiditon: 
//Function: 
//Create Time: 2014-06-25
//Update Time: 
//Comment: 
//---------------------------
function expandAll() {
  if (!check()) {
    return;
  }
  var zTree = $.fn.zTree.getZTreeObj("treeDemo");
  if (asyncForAll) {
    $("#demoMsg").text(demoMsg.expandAll);
    zTree.expandAll(true);
  } 
  else {
    expandNodes(zTree.getNodes());
    if (!goAsync) {
      $("#demoMsg").text(demoMsg.expandAll);
      curStatus = "";
    }
  }
}

//---------------------------
//Name: 
//Trigger Condiditon: 
//Function: 
//Create Time: 2014-06-25
//Update Time: 
//Comment: 
//---------------------------
function asyncAll() {
  if (!check()) {
    return;
  }
  var zTree = $.fn.zTree.getZTreeObj("treeDemo");
  if (asyncForAll) {
    $("#demoMsg").text(demoMsg.asyncAll);
  } else {
    asyncNodes(zTree.getNodes());
    if (!goAsync) {
      $("#demoMsg").text(demoMsg.asyncAll);
      curStatus = "";
    }
  }
}

//---------------------------
//Name: 
//Trigger Condiditon: 
//Function: 
//Create Time: 2014-06-25
//Update Time: 
//Comment: 
//---------------------------
function asyncNodes(nodes) {
  if (!nodes) return;
  curStatus = "async";
  var zTree = $.fn.zTree.getZTreeObj("treeDemo");
  for (var i=0, l=nodes.length; i<l; i++) {
    if (nodes[i].isParent && nodes[i].zAsync) {
      asyncNodes(nodes[i].children);
    } else {
      goAsync = true;
      zTree.reAsyncChildNodes(nodes[i], "refresh", true);
    }
  }
}

//---------------------------
//Name: 
//Trigger Condiditon: 
//Function: 
//Create Time: 2014-06-25
//Update Time: 
//Comment: 
//---------------------------
function reset() {
  if (!check()) {
    return;
  }
  asyncForAll = false;
  goAsync = false;
  $("#demoMsg").text("");
  //后台数据库重置
  $.post("createTables_addTestRecoed.php", function(data) {
    alert(data);
  });

  //前台UI重置
  $.fn.zTree.init($("#treeDemo"), setting);
}



//----------
//   TEST 
//---------- 
//---------------------------
//Name: 
//Trigger Condiditon: 
//Function: 
//Create Time: 2014-06-25
//Update Time: 
//Comment: 
//---------------------------
//在异步加载节点完成后显示 AJAX 提取到的信息，用于测试
// function zTreeOnAsyncSuccess(event, treeId, treeNode, msg) {
//     alert(msg);
// };
