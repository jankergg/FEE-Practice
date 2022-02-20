/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 核心还是合并2数组，然后二分法重复合并
// time completixy: O(n * n/2)
// space complexicity: O(1)
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeTwoLists(left, right) {
  if (!left) {
    return right;
  } else if (!right) {
    return left;
  } else if (left.val <= right.val) {
    left.next = mergeTwoLists(left.next, right);
    return left;
  } else {
    right.next = mergeTwoLists(right.next, left);
    return right;
  }
}
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    const merged = mergeTwoLists(lists.shift(), lists.shift());
    lists.push(merged);
  }
  return lists[0];
};
