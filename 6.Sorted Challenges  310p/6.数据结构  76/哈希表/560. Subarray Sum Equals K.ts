/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// solution1: Brute Force with prefix sum
/**
var subarraySum = function(nums, k) {
    let ans = 0;
    let sums = [0];
    for(let i=0; i<nums.length; i++){
       sums.push(nums[i] + sums[sums.length-1]);
    }

    for(let i=0; i<sums.length; i++) {
        for(let j=i+1; j<sums.length; j++){
            if(sums[j] - sums[i] ===k){
                ans++;
            }
        }
    }

    return ans;
};
**/
// solution2: Using map to memerize prefixes
var subarraySum = function (nums, k) {
  let ans = 0;
  let m = new Map();
  let sum = 0;

  m.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let target = sum - k;

    if (m.has(target)) {
      ans += m.get(target);
    }

    m.set(sum, (m.get(sum) ?? 0) + 1);
  }

  return ans;
};
