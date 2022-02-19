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
    if (node.left == null && node.right == null) {
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



console.log(binaryTreePaths_solution(test1));


function binaryTreePaths_solution(root: TreeNode | null): string[] {

    let paths: string[] = [];
    let path: number[] = [];
    if (root !=null ) {
        traversal(root, path, paths);
    }
    return paths;

};



function traversal(node: TreeNode, path: number[], paths: string[]): void {


    path.push(node.val);

    // 判断是否为叶子节点，若系就推入 paths  并return
    if (node.left == null && node.right == null) {
        paths.push(getRequiredPath(path));
        return;
    }

    // 该节点不是叶子节点，就继续遍历它的不为null的左右子节点   
    if (node.left != null) {
        traversal(node.left, path, paths);
        path.pop();
    }

    if (node.right != null) {
        traversal(node.right, path, paths);
        path.pop();
    }

    return;

}


function getRequiredPath(path: number[]) {

    return path.join("->");

}