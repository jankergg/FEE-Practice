// 解题思路： Sorting + two pointer
/**
 * @param {number[]} nums
 * @return {number[][]}
 Time: O(nlogn)
 Space: O(n);
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    while (i > 0 && nums[i] === nums[i - 1]) i++;

    let sum = 0 - nums[i];
    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      if (nums[low] + nums[high] === sum) {
        result.push([nums[i], nums[low], nums[high]]);
        while (low < high && nums[low] === nums[low + 1]) low++;
        while (low < high && nums[high] === nums[high - 1]) high--;
        low++;
        high--;
      } else if (nums[low] + nums[high] > sum) {
        high--;
      } else {
        low++;
      }
    }
  }
  return result;
};
