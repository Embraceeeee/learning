import { ListNode } from "./list-node";
/**
 *  反转链表
 *  @see  https://programmercarl.com/0206.%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8.html#%E5%8F%8C%E6%8C%87%E9%92%88%E6%B3%95
 * @param head
 * @returns
 */
function reverseList(head: ListNode | null): ListNode | null {
  // 反转的话那就 删除删除前后元素（将前后元素的前一个元素指向改变即可）

  let pre = null;
  let cur = head;
  // 遍历至尾节点
  while (cur) {   
    // 获取原下一节点
    const next = cur.next;
    // 调换当前节点指向上一节点（翻转）
    cur.next = pre;
    // 重新赋值前一节点为下次 循环
    pre = cur;
    // 重新赋值当前节点为下次 循环
    cur = next;
  }
  return pre;
}
function printList(head: ListNode | null): void {
  let cur = head;
  while (cur) {
    console.log(cur?.val);
    console.log(" ");
    cur = cur.next;
  }
  return;
}

printList(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, null)))));
