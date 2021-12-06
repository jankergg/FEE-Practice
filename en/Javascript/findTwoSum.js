let findSumOfTwo = function (A, val) {
  let set = {};
  for (let i = 0; i < A.length; i++) {
    let rest = val - A[i] + "";
    console.log("rest", rest, set, set[rest]);
    if (set[rest] !== undefined) {
      return true;
    }
    set[A[i]] = true;
  }
  return false;
};
let res = findSumOfTwo([2, 1, 8, 4, 7, 3], 3);
console.log(res);
