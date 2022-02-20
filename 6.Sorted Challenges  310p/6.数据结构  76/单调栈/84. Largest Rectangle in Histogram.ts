// @ts-nocheck
// TODO: 需要认真分配单调栈解法，并回顾接雨水问题(done)
/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(h) {
    const stack = []; // we only need to store the index, cause we can get the value by h[index]
    let max = 0;

    for(let i=0; i<h.length; i++){
        while(stack.length && h[i] < h[stack[stack.length-1]]) {
            // 栈顶元素一定是栈中最大的，也是当前元素外，被弹出的最小的值， 所以用来做高度
            const height = h[stack.pop()];
            while(stack.length && height === h[stack[stack.length-1]]){
                stack.pop();
            }
            // ?? 此处为何是需要额外减去1 ？？
            // 因为stack刚刚弹出一个元素，我们此处是需要计算栈中所有比当前元素大的元素所构成的宽度问和
            const width = stack.length ? i - stack[stack.length-1] - 1 : 1;
            max = Math.max(max, width * height);
        }
        stack.push(i);
    }
    console.log(stack)
    while(stack.length) {
        const height = h[stack.pop()];
        // important: 如果当前栈为空，说明我们只剩下最小的数了，它的宽度可以是整个数组
        // 如果不为空，则我们可以计算当前栈顶index 到最右边的矩形，高度为当前最小数，即栈顶数。 因为比栈顶大的元素都已经pop掉了
        while(stack.length && height === h[stack[stack.length-1]]){
            stack.pop();
        }
        const width = stack.length ? h.length - stack[stack.length-1] - 1 : h.length;
        max = Math.max(max, width * height);
    }

    return max;
};