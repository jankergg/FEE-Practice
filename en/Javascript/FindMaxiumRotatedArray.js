function findMax(nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  if (n < 2) {
    return nums[0];
  }
  let mid = left + Math.floor((right - left) / 2);
  while (left <= mid) {
    if (nums[left] < nums[right]) {
      return nums[right];
    }
    if (nums[mid] < nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
    // if (nums[left] > nums[mid]) {
    //   right = mid - 1;
    // } else if (nums[left] < nums[mid]) {
    //   left = mid;
    // } else {
    //   return nums[mid];
    // }
    mid = left + Math.floor((right - left) / 2);
  }
  return nums[left];
}

const testCases = [
  [1, 2, 3, 4, 5],
  [4, 5, 1, 2, 3],
  [5, 1, 2, 3, 4],
  [2, 1],
  [1, 0],
  [2, 0, 1],
];
testCases.forEach((t) => {
  console.log("input: => ", JSON.stringify(t), "output:=>", findMax(t));
});
