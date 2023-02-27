class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummyHead = new ListNode(0, head);

  let cur = dummyHead;

  while (cur.next != null) {
    const nextNode = cur.next;
    if (nextNode.val === val) {
      cur.next = nextNode.next;
    } else {
      cur = nextNode;
    } 

    
  }

  return dummyHead.next;
}

console.log(
  removeElements(
    new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7, null)))),
    7
  )
);
