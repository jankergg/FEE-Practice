/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
  return this;
}
function addNode(node, val) {
  if (node.val === null) {
    node.val = val;
    console.log('node')
    return node;
  } else {
    node.next = new ListNode(val);
    return node.next;
  }
}
var mergeTwoLists = function (l1, l2) {
  let p1 = 0;
  let p2 = 0;
  let res = new ListNode(null);
  let next = res;
  while (l1[p1] !== undefined || l2[p2] !== undefined) {
    let e1 = l1[p1];
    let e2 = l2[p2];
    if (e2 === undefined || e1 < e2) {
      next = addNode(next, e1);
      p1++;
    } else {
      next = addNode(next, e2);
      p2++;
    }
  }
  return res;
};



const d = mergeTwoLists([1, 2, 4], [1, 3, 4, 5]);
console.log(d)