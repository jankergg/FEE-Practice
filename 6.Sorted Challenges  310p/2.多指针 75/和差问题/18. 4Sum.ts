// @ts-nocheck
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// time complexity: O(n^2)
function threeSum(nums, index, target, result) {
  for (let i = index + 1; i < nums.length - 2; i++) {
    while (i > index + 1 && nums[i] === nums[i - 1]) i++;

    let sum = target - nums[i];
    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      if (nums[low] + nums[high] === sum) {
        result.push([nums[index], nums[i], nums[low], nums[high]]);
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
}
var fourSum = function (nums, target) {
  const result = [];
  if (nums.length < 4) {
    return result;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    while (i > 0 && nums[i] === nums[i - 1]) i++;
    if (i < nums.length - 3) {
      threeSum(nums, i, target - nums[i], result);
    }
  }
  return result;
};
