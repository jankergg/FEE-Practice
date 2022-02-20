// Question
// Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn’t one, return 0 instead.

// Note:
// The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

// Example 1:
// Input: nums = [1, -1, 5, -2, 3], k = 3
// Output: 4
// Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
// Example 2

// Input: nums = [-2, -1, 2, 1], k = 1
// Output: 2
// Explanation: The subarray [-1, 2] sums to 1 and is the longest.
// Follow Up:

// Can you do it in O(n) time?
// 解题思路： 1. 如果碰到sum===k 直接标记当前坐标为可能的结果 2. 如果sum-k存在过， 说明(某一个前缀和+k）=== sum, 也就是说，中间这段数组的和就是k
function MaximumSizeSubarrayEqualsK(arr: number[], k: number) {
  const prefix = new Map<number, number>();
  let sum = 0,
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === k) {
      max += i;
    } else if (prefix.has(sum - k)) {
      max = Math.max(max, i - (prefix.get(sum - k) || 0));
    }
    if (!prefix.has(sum)) {
      prefix.set(sum, i);
    }
  }
  return max;
}

console.log(MaximumSizeSubarrayEqualsK([1, -1, 5, -2, 3], 3));
