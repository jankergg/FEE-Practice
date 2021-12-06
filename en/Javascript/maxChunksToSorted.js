/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  if (!arr.length) { return 0 }
  if (arr.length === 1) { return 1 }
  let max = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (max === i) {
      num++;
    }
  }
  return num;
};
let d = maxChunksToSorted([1, 0, 3, 4, 2]);
console.log(d)