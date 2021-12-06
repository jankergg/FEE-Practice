const find_subarrays = function (arr, target) {
  const result = [];
  let product = 1;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
    while (product >= target && start < arr.length) {
      product /= arr[start];
      start++;
    }
    let window = [];
    for (let j = i; j >= start; j--) {
      window.unshift(arr[j]);
      result.push(window.slice(0));
    }
  }
  return result;
};
let res1 = find_subarrays([2, 5, 3, 10], 30);
let res2 = find_subarrays([8, 2, 6, 5], 50);

console.log(res1);
console.log(res2);