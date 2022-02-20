// @ts-nocheck
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.array = w;
  for (let i = 1; i < w.length; i++) {
    w[i] = w[i] + w[i - 1];
  }
  this.w = w;
  return this;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  if (this.w.length === 1) {
    return 0;
  }
  const rdm = Math.trunc(Math.random() * this.w[this.w.length - 1] + 1);
  let left = 0,
    right = this.w.length - 1;
  while (left < right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (this.w[mid] === rdm) {
      return mid;
    } else if (this.w[mid] > rdm) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 */

var obj = new Solution([1,3]);
var param_1 = obj.pickIndex();
console.log(param_1);
