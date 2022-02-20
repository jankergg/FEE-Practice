function readyNumbers(numbers, k) {
    let len = numbers.length;
    if (len <= k) {
        return numbers;
    }
    let res = "";
    let sum = 0;
    let i = 0;
    while (i < len) {
        sum += parseInt(numbers[i]);
        if ((i + 1) % k === 0) {
            res = res + "" + sum;
            sum = 0;
        }
        i++;
        if (i === len && len % k > 0) {
            res = res + "" + sum;
        }
    }
    return readyNumbers(res, k);
}
console.log(readyNumbers("11136150", 5));
// readyNumbers("1111122222251", 3);
