/**
 * @param {number[]} nums
 * @return {number}
 */
// 解题要点： 此处的关键是：consective 连续的
// 1. We find every entry of consective nums, by checking if set has n-1
// 2. for every given entry, we keep find its consecitive nums in the set
var longestConsecutive = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    // find the smallest one
    let n = nums[i];
    if (!set.has(n - 1)) {
      let m = n + 1;
      while (set.has(m)) {
        m++;
      }
      max = Math.max(max, m - n);
      // if we find an answer bigger than half the length of nums, that means no other anser could be better.
      if (max > set.size / 2) {
        return max;
      }
    }
  }

  return max;
};


