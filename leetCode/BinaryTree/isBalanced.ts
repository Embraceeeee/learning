import { TreeNode } from "./treenode";


/**
 * # 110 平衡二叉树 判断 
 * 
 * @param root 
 */
function isBalanced(root: TreeNode | null): boolean {

    if (root == null) {
        return true;
    }
    return false;
};


function getDepth(root: TreeNode | null):  boolean {

    if (root == null) {
        return true;
    }


    let leftHeight=1, rightHeight = 1;
    let [leftNode, rightNode ] = [root.left, root.right];
    while (leftNode != null) {
        leftHeight++;
        leftNode = leftNode.left;
    }

    while (rightNode != null) {
        rightHeight++;
        rightNode = rightNode.right;
    }

    if(  Math.abs(leftHeight-rightHeight) > 1 ) {
        return false;
    }

    return getDepth(root.left) && getDepth(root.right);



}


var test1 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    )  ,
    new TreeNode(3, 
        new TreeNode(6,
            new TreeNode(8)
        ),
        null
    )
);

console.log(
    getDepth(test1)

)