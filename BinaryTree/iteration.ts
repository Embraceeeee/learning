

/**
 *  前序遍历（中左右）
 * @param root 
 * @returns 
 */
function preorderTraversal_Iteration(root: TreeNode | null):number[] { 

  let stack:TreeNode[] = [];
  let result:number[] = [];
  if(root===null){
    return result;
  }
  stack.push(root);
  while(stack.length!=0){
    // 获取栈顶部节点
    const node:TreeNode = stack[stack.length-1];
    // 该节点出去
    stack.pop();
    // 出去的节点推入结果数组
    result.push(node.val);
    // 先存右子树（栈的先进后出）（并且让空节点不入栈）
    if(node.right!==null){
      stack.push(node.right);
    }
    // 最后才存左子树，下一次开头，它便是中，它会被pop()出去
    if(node.left!==null){
      stack.push(node.left);
    }

  }
  return result;

}


/**
 * 中序遍历（左中右） 
 * @param root 
 * @returns 
 */
function inorderTraversal_Iteration(root: TreeNode | null):number[] { 

  let stack:TreeNode[] = [];
  let result:number[] = [];
  let cur:TreeNode|null = root;

  // 透过指针来访问节点，访问到最底层 
  // 每个while 循环是遍历往下走的每一步
  while( cur !=null|| stack.length!==0  ){

    if(cur!==null){
      // 继续往左节点访问
      stack.push(cur);
      cur = cur.left;           // 左

     }else{
       // 这时候回到上一个节点(也未中节点)(出栈也是结果的值推入)
       cur = stack.pop() as TreeNode;
       result.push( cur.val );  // 中
       cur = cur.right;         // 右
     }
  } // 其实每个子节点也会遍历一次左右子节点


  return result;

}

/**
 *  后序遍历（左右中）  
 * @param root 
 */
function postorderTraversal_Iteration(root: TreeNode | null):number[] { 


  // 将前序遍历的中左右，改成中右左，对结果反一下值即可

  let stack:TreeNode[] = [];
  let result:number[] = [];

  if(root===null){
    return result;
  }

  stack.push(root);

  // 每个while循环都只访问一层树的  
  while(stack.length!==0) { 

    // 中
    let cur = stack.pop() as TreeNode;
    
    result.push( cur.val ); 

    // 左
    if(cur.left!==null){
      stack.push(cur.left);
    }

    // 右 
    if(cur.right!==null){
      stack.push(cur.right);
    }
  }
 
  return result.reverse(); 

}





