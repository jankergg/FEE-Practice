/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
    this.nums = nums;
    this.prefix = [nums[0]];

    for(let i=1; i<nums.length; i++){
        this.prefix[i] = nums[i] + this.prefix[i-1];
    }
    return this;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left>0){
        return this.prefix[right] - this.prefix[left-1];
    }
    return this.prefix[right];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */