// @ts-nocheck
// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
function MaxSubArray(nums) {
  let max = nums[0];
  let accum = 0;

  for (let i = 0; i < nums.length; i++) {
    accum += nums[i];
    // check if current sum bigger than current max value;
    max = Math.max(max, accum);
    // important: if we got a negative accumulate, reset it to zero
    accum = Math.max(accum, 0);
  }

  return max;
}

console.log(MaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
