import { ListNode } from "./list-node";

/**
 *
 *  删除链表的倒数第N个节点
 * @see https://programmercarl.com/0019.%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%ACN%E4%B8%AA%E8%8A%82%E7%82%B9.html#_19-%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%ACn%E4%B8%AA%E8%8A%82%E7%82%B9
 * @param head
 * @param n
 * @returns
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 只能遍历到最后一个元素，然后根据 n 向前找  ，但怎样向前找呢？
  let length = 0;
  const dummyHead = new ListNode(-1, head);
  let temp = dummyHead;
  while (temp?.next) {
    temp = temp.next;
    length++;
  }
  let count = length - n;
  if (count < 0) {
    return head;
  }

  temp = dummyHead;
  for (let i = 0; i < count; i++) {
    temp = <ListNode>temp.next;
  }

  //    删除的动作
  temp.next = (<ListNode>temp.next).next;
  return dummyHead.next;
}

console.log(
  removeNthFromEnd(
    new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(7, null)))),
    2
  )
);

function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
  // 看到有一种快慢指针的 解法

  // 比如 长 5， 删除倒数 n=1 节点 ，先让快指针走 n+1节点（从 head开始走 n+1 步），然后 慢指针一起走，当 快指针的next走到null时候（快指针现在在尾元素），出循环，慢指针做删除元素动作

  const dummyHead = new ListNode(-1, head);

  let fast = dummyHead;
  let slow = dummyHead;

  //   因为从 虚拟头结点开始的 所以这里仅走 n 步
  while (n-- && fast.next) {
    fast = fast.next;
  }

  // 快慢指针一起移动到 快指针 到 尾元素
  while (fast?.next && slow?.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // 删除的动作
  if (slow?.next) {
    slow.next = slow?.next?.next;
  }

  return dummyHead.next;
}

console.log(
  removeNthFromEnd1(
    new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(7, null)))),
    2
  )
);
