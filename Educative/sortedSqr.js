function sortedSqr(arr) {
    const res = [];
    const stack = [];
    let i = 0;
    while (i < arr.length) {
        let sqr = arr[i] * arr[i];
        if (arr[i] < 0) {
            stack.push(sqr);
            i++;
        } else {
            if (stack.length > 0 && stack[stack.length - 1] < sqr) {
                res.push(stack.pop());
            } else {
                res.push(sqr);
                i++;
            }
        }
    }
    return res;
}
console.log(
    sortedSqr([-9, -6, -5, -4, -1, 1, 5, 7, 10, 11, 12, 13, 14, 15, 16])
);
/**
 *
    -9, -6, -5, -4, -1, 1, 5, 7, 10, 11, 12, 13, 14, 15, 16
    p1=0, p2 = 7;
    7, -6, -5, -4, -1, 1, 5, -9, 10, 11, 12, 13, 14, 15, 16
    p1=0; p2 = 6
    5, -6, -5, -4, -1, 1, 7, -9, 10, 11, 12, 13, 14, 15, 16
    p1=0; p2 = 5
    1, -6, -5, -4, -1, 5, 7, -9, 10, 11, 12, 13, 14, 15, 16
    p1=0; p2 = 5
    1, -1, -5, -4, -6, 5, 7, -9, 10, 11, 12, 13, 14, 15, 16
 */