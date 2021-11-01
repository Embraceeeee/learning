function preorderTraversal_UnifiedIteration(root: TreeNode | null): number[] {


  const stack: (TreeNode | null)[] = [];

  const result: number[] = [];

  if (root !== null) {
    stack.push(root);
  }
  while (stack.length !== 0) {
    let cur: TreeNode | null = stack.pop() as (TreeNode | null);
    if (cur !== null) {
      // 访问节点
      // 右
      if (cur.right !== null) {
        stack.push(cur.right);
      }
      // 左
      if (cur.left !== null) {
        stack.push(cur.left);
      }
      // 中  （ 中节点访问过，但是还没有处理，加入空节点做为标记 ） 
      stack.push(cur);
      // 关键推入null，在下一个循环时候帮助转到处理节点环节 
      stack.push(null);

    } else {
      // 处理节点
      cur = stack.pop() as TreeNode;
      result.push(cur.val);
    }
  }
  return result;
}


function inderTraversal_UnifiedIteration(root: TreeNode | null) {

  const stack: (TreeNode | null)[] = [];

  const result: number[] = [];

  if (root !== null) {
    stack.push(root);
  }
  while (stack.length !== 0) {
    let cur: TreeNode | null = stack.pop() as (TreeNode | null);
    if (cur !== null) {
      // 访问节点
      // 右
      if (cur.right !== null) {
        stack.push(cur.right);
      }
      // 中 （ 中节点访问过，但是还没有处理，加入空节点做为标记 ） 
      stack.push(cur);
      // 关键推入null，在下一个循环时候帮助转到处理节点环节 
      stack.push(null);

      // 左
      if (cur.left !== null) {
        stack.push(cur.left);
      }

    } else {
      // 处理节点
      cur = stack.pop() as TreeNode;
      result.push(cur.val);
    }
  }
  return result;

}

function postorderTraversal_UnifiedIteration(root: TreeNode | null) {

  const stack: (TreeNode | null)[] = [];

  const result: number[] = [];

  if (root !== null) {
    stack.push(root);
  }
  while (stack.length !== 0) {
    let cur: TreeNode | null = stack.pop() as (TreeNode | null);
    if (cur !== null) {
      // 访问节点

       // 中 （ 中节点访问过，但是还没有处理，加入空节点做为标记 ） 
       stack.push(cur);
       // 关键推入null，在下一个循环时候帮助转到处理节点环节 
       stack.push(null);
      // 右
      if (cur.right !== null) {
        stack.push(cur.right);
      }
      // 左
      if (cur.left !== null) {
        stack.push(cur.left);
      }
     
    } else {
      // 处理节点
      cur = stack.pop() as TreeNode;
      result.push(cur.val);
    }
  }
  return result;

}