
/*Definition for a binary tree node. **/


class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}




// 用层序遍历 (队列) 
function minDepth(root: TreeNode | null): number {

    if (root == null) {
        return 0;
    }
    const depths: number[] = [];
    let tempDepth = 0;
    const queue: TreeNode[] = [root];

    while (queue.length != 0) {

        let curLayerNodeAmount = queue.length;
        // 每遍历一层，深度加一
        tempDepth++;
        for (let i = 0; i < curLayerNodeAmount; i++) {

            // 取出队列首元素 
            let node = queue.shift();
            if (node?.left != null) {
                queue.push(node?.left);
            }
            if (node?.right != null) {
                queue.push(node?.right);
            }
            // 当这个节点为子节点，记录当前节点的深度 
            if (node?.right == null && node?.left == null) {
                depths.push(tempDepth);
            }
        }

    }
    return Math.min(...depths);
};


var test = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);


var test1 = new TreeNode(3,
    null,
    new TreeNode(20,
        null,
        new TreeNode(7)
    )
);

console.log(minDepth(test1));













