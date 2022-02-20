//重点： 二分法的熟练应用
//重点：最大、最小 堆 priority queue的应用
var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // binary serch to find where to insert
  let l = 0;
  let r = this.arr.length - 1;
  if (num <= this.arr[l]) {
    this.arr.unshift(num);
    return;
  }
  if (num >= this.arr[r]) {
    this.arr.push(num);
    return;
  }
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (num < this.arr[m]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  // insert num
  this.arr.splice(l, 0, num);
  //console.log(this.arr, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.arr.length === 1) {
    return this.arr[0];
  }
  let mid = Math.floor(this.arr.length / 2);
  if (this.arr.length % 2 === 0) {
    return (this.arr[mid] + this.arr[mid - 1]) / 2;
  }
  return this.arr[mid];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
