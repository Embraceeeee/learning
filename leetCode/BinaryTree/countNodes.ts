import { TreeNode } from "./treenode";

/**
 * #222 完全二叉树的节点个数  
 * @param root 
 */
function countNodes(root: TreeNode | null): number {


    // 根据根节点去推有多少个节点，感觉要遍历，并且找到最底层即可
    // 可以先确定有多少层
    /* 
    let node = root;
    let layer: number = 0;
    while (node != null) {
        layer++;
        node = node.left;
    }
    // 原来这种事满二叉树的情况  
    let count = 2 * layer - 1;

    return count;

    */

    
    // 用递归来做 
    if (root == null) {
        return 0;
    }
    let left = root.left;
    let right = root.right;

    let leftHeight = 0;
    let rightHeight = 0;

    while (left != null) {
        left = left.left;
        leftHeight++;
    }

    while (right != null) {
        right = right.right;
        rightHeight++;
    }

    if (leftHeight == rightHeight) {
        // 满二叉树  
        return (2 << leftHeight) - 1;
    }

    // 不是满二叉树  当前根节点+左右子树的节点数量 
    return countNodes(root.left) + countNodes(root.right) + 1;


};


console.log()


