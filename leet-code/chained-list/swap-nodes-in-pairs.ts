import { ListNode } from "./list-node";
/**
 *  @see https://programmercarl.com/0024.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html#%E6%80%9D%E8%B7%AF
 *
 * @param head
 */
function swapPairs(head: ListNode | null): ListNode | null {

  const dummyHead = new ListNode(-1, head);
  // 并且我要保证单数的，即双数的可能不会做调换
  let pre: ListNode = dummyHead;
  let cur = head;
  //   若有其中一方为null 就不做交换
  while (cur && cur.next) {

    // 记录临时节点
    const two = cur.next;
    // 其实一开始写的那个也挺好的： 1前一个元素指向第二个 2第二个元素指向 当前 3当前元素 指向 two 后面元素 好像结果是可以的
    // 记录临时节点 备份第三元素后面的链表
    const three = two?.next;

    // 1 当前元素 指向 two 后面元素
    cur.next = three;
    // 2 第二个元素指向 当前
    two.next = cur;
    // 3 前一个元素指向 第二个
    pre.next = two;

    // 赋值下一循环的, 当前cur 为第二个元素
    pre = cur;
    cur = pre.next;
  }

  return dummyHead.next;
}

console.log(
  swapPairs(
    new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(7, null))))
  )
);
