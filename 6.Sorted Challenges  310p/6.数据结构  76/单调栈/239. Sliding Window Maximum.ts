//@ts-ignore
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 1 || nums.length === 1) {
    return nums;
  }

  const q = [];
  const res = [];

  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] > nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
  }

  res.push(nums[q[0]]);

  for (let i = k; i < nums.length; i++) {
    while (q.length && nums[i] > nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
    // if q[0] has exceeded the range
    while (q.length && i - q[0] >= k) {
      q.shift();
    }
    res.push(nums[q[0]]);
  }

  return res;
};
