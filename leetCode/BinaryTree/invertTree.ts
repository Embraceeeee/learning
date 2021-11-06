 import { TreeNode } from "./treenode";

/**
 *  翻转二叉树 （左右转）
 * @param root  
 * @returns 
 */
function invertTree(root: TreeNode | null): TreeNode | null {

  // 链表的话，那么我们也可以 用队列 ，套用层级遍历那个 
  const queue:(TreeNode|null)[] = []; 

  queue.push(root);
  // 队列存储每一层级 
  while(queue.length!=0){
    const tempNode = queue.shift() as  (TreeNode | null) ; 
    swapChildTree(tempNode);
    // 不为bull的才推进去
    tempNode?.left!=null && queue.push(tempNode.left);
    tempNode?.right!=null && queue.push(tempNode.right);
    
  }

  return root;
};


function swapChildTree(root:TreeNode|null) {

  if(root==null){
    return ;
  }
  
  const left = root?.left, right = root?.right;
  // 交换二者的子树 排除null情况 (都为null就不给它交换啦，如果其中一个为null还是交换吧)
  if (left != null  ||  right != null) {
    [root.left,root.right] = [right,left];
  }
  return  ;

}

const test1: TreeNode = new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

const test12: TreeNode = new TreeNode(1,
  null,
  new TreeNode(7)
);


console.log(invertTree_LevelOrder( test1 ));



/**
 *  用严格的BFS方式
 * @param root 
 * @returns 
 */
function invertTree_LevelOrder(root: TreeNode | null): TreeNode | null {

  // 链表的话，那么我们也可以 用队列 ，套用层级遍历那个 
  const queue:(TreeNode|null)[] = []; 
  // 推入root 
  queue.push(root);
  // 队列存储每一层级 
  while(queue.length!=0){
    const curLength = queue.length; 
    for(let i=0;i<curLength;i++){
      // 拿出队列的首元素
      const tempNode = queue.shift() as  (TreeNode | null) ; 
      // 交换的判断null值写在里面了，所以while循环外面不用判断root null
      swapChildTree(tempNode); 
      // 不为null的才推进去
      tempNode?.left!=null && queue.push(tempNode.left);
      tempNode?.right!=null && queue.push(tempNode.right);
    }
  }

  return root;
};



