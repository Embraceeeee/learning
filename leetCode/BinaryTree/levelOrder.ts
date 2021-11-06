import { TreeNode } from "./treenode";

/**
 *  层序遍历   
 *  主要用到队列，while是遍历层级。for循环让该层元素出队   
 * @param root 
 * @returns 
 */
function levelOrder(root: TreeNode | null):number[][]  {

  const queue: (TreeNode | null)[] = [];
  const reuslt: number[][] = [];

  if (root !== null) {
    queue.push(root);
  }
  while (queue.length !== 0) {

    const floorTreeResult: number[] = [];

    const curLength = queue.length;

    for (let i = 0; i < curLength; i++) {
      // 该层节点出队 
      const curNode = queue.shift() as TreeNode ;
      // 不把null推入队列中 存放下一层的节点
      // 左
      if(curNode.left!==null){
        queue.push(curNode.left);
      }
      // 右
      if(curNode.right!==null){
        queue.push(curNode.right);
      }
      // 推该结果值
      floorTreeResult.push(curNode.val);

    }
    reuslt.push(floorTreeResult);

  }
  return reuslt;
}