import { TreeNode } from "./treenode";


var test1 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3,
        new TreeNode(6,
            new TreeNode(8)
        ),
        null
    )
);



/**
 * 返回当前平衡二叉树节点的高度 
 * 如果不是平衡二叉树，则返回-1
 * @param node 
 * @returns 
 */
function getHeight(node: TreeNode | null): number {



    // 当遇到空节点，此时以当前节点为根节点的树，树的高度为0  
    if (node == null) {
        return 0;
    }
    // 左子树 的高度
    const leftHeight = getHeight(node.left);
    // 右子树的高度
    const rightHeight = getHeight(node.right);
    console.log(node.val, '  ', leftHeight, '  ', rightHeight)
    // 左右子树有一边为不平衡的树，那直接返回-1
    if (leftHeight == -1 || rightHeight == -1) {
        return -1;
    }

    // 如果是平衡的二叉树，那么返回当前节点高度 （函数要求）
    if (Math.abs(leftHeight - rightHeight) <= 1) {
        return 1 + Math.max(leftHeight, rightHeight);
    } else {
        return -1;
    }

}



/**
 * # 110 平衡二叉树 判断 
 * 
 * @param root 
 */
function isBalanced(root: TreeNode | null): boolean {

    if (getHeight(root) != -1) {
        return true;
    } else {
        return false;
    }
};
console.log(isBalanced(test1));




// function isBalanced(root: TreeNode | null): boolean {

//     if (root == null) {
//         return true;
//     }
//     return false;
// };


// function getDepth(root: TreeNode | null): boolean {

//     if (root == null) {
//         return true;
//     }


//     let leftHeight = 1, rightHeight = 1;
//     let [leftNode, rightNode] = [root.left, root.right];
//     while (leftNode != null) {
//         leftHeight++;
//         leftNode = leftNode.left;
//     }

//     while (rightNode != null) {
//         rightHeight++;
//         rightNode = rightNode.right;
//     }

//     if (Math.abs(leftHeight - rightHeight) > 1) {
//         return false;
//     }

//     return getDepth(root.left) && getDepth(root.right);



// }

