// @algorithm @lc id=55 lang=javascript
// @title jump-game
import * as a from "algm";
// @test([2,3,1,1,4])=true
// @test([3,2,1,0,4])=false
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length;
  const m = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    // if the first nums is zero
    if (nums[i] === 0 && i === 0) {
      return false;
    }
    if (nums[i] >= n - i) {
      return true;
    }

    if (i > 0) {
      m[i] = Math.max(m[i - 1] - 1, nums[i]);
    } else {
      m[i] = nums[i];
    }

    if (nums[i] === 0 && nums[i - 1] - 1 === 0) {
      return false;
    }
  }
  return m[n] > 0;
};
