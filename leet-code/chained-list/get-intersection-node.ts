import { ListNode } from "./list-node";
/**
 * @see https://programmercarl.com/%E9%9D%A2%E8%AF%95%E9%A2%9802.07.%E9%93%BE%E8%A1%A8%E7%9B%B8%E4%BA%A4.html#%E6%80%9D%E8%B7%AF
 * @param headA
 * @param headB
 */
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  //  不过这种方式不能说找到的就是相交点，因为相交点后面的长度应该对两条链表来讲的话都一样的长度
  // 如果能够从后往前就好了 后往前比较
  //  想到一种，求两个链表的长度并相减，然后长的链表走相减差数值步数，而短的链表则继续走一步就好~

  // 想到用递归的方式 或者 栈的方式

  // 看题解！
  let lengthA = 0,
    lengthB = 0;
  let tempA = headA,
    tempB = headB;

  // 计算长度
  while (tempA) {
    lengthA++;
    tempA = tempA.next;
  }

  // 计算长度
  while (tempB) {
    lengthB++;
    tempB = tempB.next;
  }

  (tempA = headA), (tempB = headB);

  // 保证 length A 和 tempA 都系长的一方
  if (lengthA < lengthB) {
    [lengthA, lengthB] = [lengthB, lengthA];
    [tempA, tempB] = [headB, headA];
  }

  // temp A 先移动到和 temp B 同等长度的位置
  let gap = lengthA - lengthB;
  while (tempA && gap > 0) {
    tempA = tempA?.next;
    gap--;
  }

  // 逐一比较即可
  while (tempA && tempB) {
    if (tempA == tempB) {
      return tempA;
    }
    tempA = tempA?.next;
    tempB = tempB?.next;
  }

  return null;
}

const interSection = new ListNode(2, new ListNode(4, null));
console.log(
  getIntersectionNode(
    new ListNode(1, new ListNode(9, new ListNode(1, interSection))),
    new ListNode(3, interSection)
  )
);
