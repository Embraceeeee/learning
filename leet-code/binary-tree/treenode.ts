export class TreeNode {
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
