// @ts-nocheck
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  if (!head.next) {
    return [0];
  }
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const res = [];
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      res[stack.pop()] = arr[i];
    }
    res[i] = res[i] || 0;
    stack.push(i);
  }
  return res;
};
