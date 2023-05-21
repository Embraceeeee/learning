import { ListNode } from "./list-node";
/**
 * @see https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html
 * @param head
 * @returns
 */
function detectCycle(head: ListNode | null): ListNode | null {
  const stack: ListNode[] = [];

  let cur = head;
  while (cur) {
    if (isCurrentNodeRepeat(stack, cur)) {
      return cur;
    }

    stack.push(cur);
    cur = cur.next;
  }
  return null;
}

function isCurrentNodeRepeat(stack: ListNode[], cur: ListNode) {
  return stack.some((node) => node == cur);
}

function detectCycle1(head: ListNode | null): ListNode | null {
  let fast = head,
    slow = head;
  // 寻找 快指针和满指针的相遇节点
  while (fast && fast?.next) {
    // 这里应该先执行，否则直接 meet node 为 head了
    slow = slow!.next;
    fast = fast.next.next;
    // 快慢指针相遇，此时从head 和 相遇点，同时查找直至相遇
    if (slow == fast) {
      let index1 = head,
        index2 = slow;
      while (index1 != index2) {
        index1 = index1!.next;
        index2 = <ListNode>index2!.next;
      }
      return index1;
    }
  }
  return null;
}








