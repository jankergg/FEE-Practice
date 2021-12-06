const smallest_subarray_with_given_sum = function (s, arr) {
  const win = [];
  let res = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    win.push(arr[i]);
    sum += arr[i];
    while (sum >= s) {
      res = res === 0 ? win.length : Math.min(res, win.length);
      sum -= win[0];
      win.shift();
    }
  }
  return res;
};

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]) === 1}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]) === 2}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]) === 3}`
);
