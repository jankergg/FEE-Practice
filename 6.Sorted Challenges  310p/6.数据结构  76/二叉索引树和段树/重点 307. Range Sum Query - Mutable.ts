// @ts-nocheck
/**
 * @param {number[]} nums
 */
class SegTreeNode {
  constructor(start, end, sum) {
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
    this.sum = sum || 0;
  }
}
function buildTree(nums, start, end) {
  if (start > end) {
    return null;
  } else if (start === end) {
    return new SegTreeNode(start, end, nums[start]);
  } else {
    let res = new SegTreeNode(start, end);
    let mid = start + Math.floor((end - start) / 2);
    res.left = buildTree(nums, start, mid);
    res.right = buildTree(nums, mid + 1, end);
    res.sum = res.left.sum + res.right.sum;
    return res;
  }
}
function updateSegTree(root, index, val) {
  if (root.start === root.end) {
    root.sum = val;
  } else {
    let mid = root.start + Math.floor((root.end - root.start) / 2);
    if (index <= mid) {
      updateSegTree(root.left, index, val);
    } else {
      updateSegTree(root.right, index, val);
    }
    root.sum = root.left.sum + root.right.sum;
  }
}
function sumSeg(root, start, end) {
  if (root.start === start && root.end === end) {
    return root.sum;
  } else {
    let mid = root.start + Math.floor((root.end - root.start) / 2);
    if (end <= mid) {
      return sumSeg(root.left, start, end);
    } else if (start >= mid + 1) {
      return sumSeg(root.right, start, end);
    } else {
      return sumSeg(root.left, start, mid) + sumSeg(root.right, mid + 1, end);
    }
  }
}
var root = buildTree(nums, 0, nums.length - 1);
var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  updateSegTree(this.root, index, val);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return sumSeg(this.root, left, right);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
