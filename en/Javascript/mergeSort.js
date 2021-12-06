let merge = function (arr, arr2) {
  let left = 0;
  let right = 0;
  let res = [];
  while (left < arr.length && right < arr2.length) {
    if (arr[left] <= arr2[right]) {
      res.push(arr[left]);
      left++;
    } else {
      res.push(arr2[right]);
      right++;
    }
  }
  while (left < arr.length) {
    res.push(arr[left]);
    left++;
  }
  while (right < arr2.length) {
    res.push(arr2[right]);
    right++;
  }
  return res;
};

let mergeSort = function (arr) {
  console.log("arr", arr);
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

let quickSort = function (a) {
  return mergeSort(a);
};
let a = [55, 23, 26, 2, 18, 78, 23, 8, 2, 3];
let b = quickSort(a);
console.log(b);
