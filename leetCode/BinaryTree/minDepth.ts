
/*Definition for a binary tree node. **/

import { TreeNode } from "./treenode";



// 最小深度的二叉树问题 111


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
                // 其实这里可以直接return的 ，因为第一次碰到的话就是最小的路径，我们也是从高往下一层层遍历的
                //depths.push(tempDepth);
                return tempDepth;
            }
        }

    }
    //return Math.min(...depths);
    return tempDepth;
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













