/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function valid_hashMap(a, b, dict) {
  let idx = 0;
  while (idx < a.length && idx < b.length) {
    let la = dict.get(a[idx]);
    let lb = dict.get(b[idx]);
    if (la === lb) {
      idx++;
    } else {
      return la < lb;
    }
  }
  if (a.length > b.length) {
    return false;
  }
  return true;
}
var isaliensorted_hashMap = function (words, order) {
  const m = new map();
  for (let i = 0; i < order.length; i++) {
    m.set(order[i], i);
  }
  for (let i = 0; i < words.length - 1; i++) {
    let isvalid = valid_hashMap(words[i], words[i + 1], m);
    if (!isvalid) {
      return false;
    }
  }
  return true;
};
function valid(a, b, dict) {
  let idx = 0;
  while (idx < a.length && idx < b.length) {
    let la = dict[a.charCodeAt(idx) - 97];
    let lb = dict[b.charCodeAt(idx) - 97];
    if (la === lb) {
      idx++;
    } else {
      return la < lb;
    }
  }
  if (a.length > b.length) {
    return false;
  }
  return true;
}
var isAlienSorted = function (words, order) {
  const m = Array(order.length);
  for (let i = 0; i < order.length; i++) {
    m[order.charCodeAt(i) - 97] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    let isvalid = valid(words[i], words[i + 1], m);
    if (!isvalid) {
      return false;
    }
  }
  return true;
};
