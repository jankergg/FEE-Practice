// short-handed range numbers
// "1,3,7,2,4,1" -> [1,3,7,12,14,21]
const getNextLevel = (s) => {
  let m = Number(s);
  let r = 0;
  while (m > 10) {
    m /= 10;
    r = r * 10 || 10;
  }
  return (Math.trunc(m) + 1) * r || 10;
};
const hasRange = (s) => {
  if (s.includes("-")) return "-";
  if (s.includes(":")) return ":";
  if (s.includes("..")) return "..";
  return null;
};
const restoreRange = (s, seperator) => {
  let nums = s.split(seperator);
  let r = [];
  nums.forEach((n) => {
    n = Number(n);
    if (r.length === 0) {
      r.push(n);
    } else {
      let last = r[r.length - 1];
      let max = n > last ? n : getNextLevel(last) + n;
      for (let i = last + 1; i <= max; i++) {
        r.push(i);
      }
    }
  });
  console.log(r)
  return r;
};
function decodeShortHandNums(str) {
  const res = [];
  const arr = str.split(",");
  let current_level = 0;
  let last_val = NaN;
  arr.forEach((n) => {
    const sep = hasRange(n);
    if (sep) {
      res.concat(restoreRange(n, sep));
    } else {
      let num = Number(n);
      if (last_val !== NaN && num <= last_val) {
        current_level = getNextLevel(res[res.length - 1]);
      }
      last_val = num;
      res.push(current_level + num);
    }
  });
  return res;
}

// console.log(decodeShortHandNums("1,3,7,2,4,1"));
console.log(decodeShortHandNums("1-3,1-2"));
