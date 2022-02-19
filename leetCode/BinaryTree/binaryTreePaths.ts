import { TreeNode } from "./treenode";


/**
 *  #257 二叉树的所有路径  
 * @param root 
 */
function binaryTreePaths(root: TreeNode | null): string[] {

    let paths: string[] = [];
    getPath(root, "", paths);
    console.log("paths:", paths);
    return paths;

};



function getPath(node: TreeNode | null, path: string, paths: string[]): string {

    // 空节点直接  return 
    if (node == null) {
       // paths.push(path);
        return path;
    }

    // 将该节点纳入路径 
    if (path != "") {
        path += "->" + node.val.toString();
    } else {
        path += node.val.toString();
    }

     // 判断是否为叶子节点，若系就推入 paths  并return
     if (node.left == null && node.right == null ) { 
        paths.push(path);
        return path;
    }

    // 该节点不是叶子节点，就继续往下遍历 
    getPath(node.left, path, paths);
    getPath(node.right, path, paths);

    return path;

}



var test1 = new TreeNode(1,
    new TreeNode(2,
        null,
        new TreeNode(5)
    ),
    new TreeNode(3)

);



console.log(binaryTreePaths(test1));