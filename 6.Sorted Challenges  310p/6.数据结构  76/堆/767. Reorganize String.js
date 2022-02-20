/**
 * Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
 * @param {string} s
 * @return {string}
 */
const { Heap } = require("./Heap");
var reorganizeString = function (s) {
  const H = new Heap((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    }
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  });
  const m = Object.create(null);
  let res = "";
  for (let i = 0; i < s.length; i++) {
    m[s[i]] = (m[s[i]] || 0) + 1;
  }
  // put [freqency, key] pairs into minHeap
  for (let k in m) {
    H.insert([m[k], k]);
  }
  while (H.size() > 1) {
    let first = H.root();
    if (first) {
      H.erase(first);
      res += first[1];
    }
    let second = H.root();
    if (second) {
      H.erase(second);
      res += second[1];
    }
    if (first && first[0] > 1) {
      H.insert([first[0] - 1, first[1]]);
    }
    if (second && second[0] > 1) {
      H.insert([second[0] - 1, second[1]]);
    }
  }
  if (H.size() === 1) {
    if (H.root()[0] > 1) return "";
    res += H.root()[1];
  }
  return res;
};
console.log(reorganizeString("eqmeyggvp"));
// console.log(reorganizeString("eqmeyggvp") === "epeqgvgym");
