var intToRoman = function (num) {
  if (num < 1 || num > 3999) {
    return new Error('Illegal Number');
  }

  function pad(len, symb) {
    let ar = [];
    for (let i = 0; i < len; i++) {
      ar[i] = symb;
    }
    return ar.join('');
  }

  let s = num.toString();
  let slen = s.length;
  let roman = ""

  // h is a magnitudes matrix
  const h = {
    1: ["I", "V", "X"], // 1 - 10
    2: ["X", "L", "C"], // 10 - 100
    3: ["C", "D", "M"], // 100 - 1000
    4: ["M"], // 1000 because our int will be less than 3999
  }
  for (let i = 0; i < slen; i++) {
    let cur = s[i];
    let level = slen - i;
    switch (cur) {
      case '4':
        roman += h[level][0] + h[level][1];
        break;
      case '5':
        roman += h[level][1];
        break;
      case '9':
        roman += h[level][0] + h[level][2];
        break;
      default:
        if (cur < 5) {
          roman += pad(cur, h[level][0]);
        } else {
          roman += h[level][1] + pad(cur - 5, h[level][0])
        }
    }
  }
  return roman;
};
intToRoman(399); //?