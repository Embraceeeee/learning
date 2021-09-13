class TreeNode {
  // 节点值
  val: number;
  // 左子树
  left: TreeNode | null;
  // 右子树 
  right: TreeNode | null;


  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;

  }
}


/**
 * 前序遍历
 * 1、确定请求参数和返回参数
 * @param curNode 当前节点
 * @param result  结果数组
 * @returns 无返回值
 */
function preorderTraversal(curNode:TreeNode|null,result:number[]){
  
  // 2、确定终止条件
  if(curNode===null){
    return ;
  }
  // 3、确定逻辑（前序的话采用中左右遍历）
  // 中
  result.push(curNode.val);
  // 左
  preorderTraversal(curNode.left,result);
  // 右
  preorderTraversal(curNode.right,result);
}

/**
 * 中序遍历
 * 1、确定请求参数和返回参数
 * @param curNode 当前节点
 * @param result  结果数组
 * @returns 无返回值
 */
 function inorderTraversal(curNode:TreeNode|null,result:number[]){
  
  // 2、确定终止条件
  if(curNode===null){
    return ;
  }
  // 3、确定逻辑（前序的话采用中左右遍历）
  // 左
  inorderTraversal(curNode.left,result);
  // 中
  result.push(curNode.val);
  // 右
  inorderTraversal(curNode.right,result);
}

/**
 * 后序遍历
 * 1、确定请求参数和返回参数
 * @param curNode 当前节点
 * @param result  结果数组
 * @returns 无返回值
 */
 function postorderTraversal(curNode:TreeNode|null,result:number[]){
  
  // 2、确定终止条件
  if(curNode===null){
    return ;
  }
  // 3、确定逻辑（前序的话采用中左右遍历）
  // 左
  postorderTraversal(curNode.left,result);
  // 右
  postorderTraversal(curNode.right,result);
  // 中
  result.push(curNode.val);
}


/* test */
const test: TreeNode = new TreeNode(5,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(6, new TreeNode(7), new TreeNode(8))
);


function getResult(root: TreeNode | null): number[] {

  let result:number[] = [];
  postorderTraversal(root,result);
  return result;
}
console.log(getResult(test))