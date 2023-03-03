/**
 *  设计链表题目
 *  @see https://programmercarl.com/0707.%E8%AE%BE%E8%AE%A1%E9%93%BE%E8%A1%A8.html#%E4%BB%A3%E7%A0%81
 *
 */
 class MyLinkedList {
  // 单链表的节点
  private dummyHead: ListNode;
  private length;

  constructor() {
    this.dummyHead = new ListNode(-1, null);
    this.length = 0;
  }

  get(index: number): number {
    if (index < 0 || index > this.length - 1) {
      return -1;
    }
    let cur = this.dummyHead;
    while (index--) {
      cur = <ListNode>cur?.next;
    }
    return cur.next?.val ?? -1;
  }

  addAtHead(val: number): void {
    const head = this.dummyHead.next;
    this.dummyHead.next = new ListNode(val, head);
    this.length++;
  }

  addAtTail(val: number): void {
    let cur = this.dummyHead;
    while (cur.next != null) {
      cur = cur.next;
    }
    cur.next = new ListNode(val);
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    // 应题目要求大于链表长度则不执行
    if (index > this.length) {
      return;
    }
    // 应题目要求 index < 0 则在 索引为0 的位置进行 Add 操作
    if (index < 0) {
      index = 0;
    }
    // 遍历至上一个节点
    let cur = this.dummyHead;
    while (index--) {
      cur = <ListNode>cur?.next;
    }
    const next = cur?.next;
    cur.next = new ListNode(val, next);
    this.length++;
  }
  deleteAtIndex(index: number): void {
    // 索引从0开始
    if (index < 0 || index > this.length - 1) {
      return;
    }

    // 遍历至上一个节点
    let cur = this.dummyHead;
    while (index--) {
      cur = <ListNode>cur?.next;
    }

    const next = cur?.next;
    cur.next = next?.next ?? null;
    this.length--;
  }
}
const test = new MyLinkedList();
test.addAtHead(1);
test.addAtTail(3);
test.addAtIndex(1, 2);
console.log(test.get(1));
test.deleteAtIndex(1);
console.log(test.get(1));

// console.log(test.get(0));
