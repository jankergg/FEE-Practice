function ArrayReduction(nums) {
  if (nums.length === 2) {
    return nums[0] + nums[1];
  }
  // sort nums ascendingly
  nums.sort((a, b) => a - b);

  let total_cost = 0;
  while (nums.length > 0) {
    let a = nums.shift();
    if (nums.length === 0) {
      break;
    }
    let b = nums.shift();
    let cost = a + b;
    total_cost += cost;
    nums.push(cost);
    nums.sort((a, b) => a - b);
  }
  return total_cost;
}

console.log(ArrayReduction([1, 2, 3]));
console.log(ArrayReduction([4, 6, 8]));
