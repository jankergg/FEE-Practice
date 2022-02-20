// @ts-nocheck
/**
 * @param {number[]} nums
 * @return {number}
 */
// solution1: O(n^2) DP + memoization
var lengthOfLIS_1 = function (nums) {
  // 我们用DP来有存放当前为止最长的连续递增长度，然后每遇到一个新数，就回去遍历一下，看其是否要加入递增队列
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 如果当前数大于之前的某个数，则递增长度+1， 如此重复
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp.reduce((max, val) => (max > val ? max : val), dp[0]);
};

// solution2: Patience Sorting + DP
var lengthOfLIS = function (nums) {
  let dp = [];
  for (let x of nums) {
    if (!dp.length || x > dp[dp.length - 1]) {
      dp.push(x);
    } else {
      let l = 0,
        r = dp.length - 1;
      while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (dp[mid] < x) l = mid + 1;
        else r = mid;
      }
      dp[l] = x;
    }
  }

  return dp.length;
};
