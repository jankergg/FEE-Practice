/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function _reverseSwap(str) {
  if (str.length < 2) { return str; }
  let arr = [];
  let start = 0;
  arr.length = str.length;
  let end = str.length - 1;
  while (start < end) {
    arr[start] = str[end];
    arr[end] = str[start];
    end--;
    start++;
  }
  return arr.join('');
}

var reverseStr = function (s, k) {
  if (!s || !k) { return }
  const tails = s.length % (2 * k);

  let remaining = '';
  let str = '';
  // if the remaining length bigger than k and less then 2k;
  if (tails > k) {
    str = s.substring(0, s.length - (tails - k));
    remaining = s.substring(str.length)
  } else if (tails !== 0) {
    // 0 < tails < k
    str = s.substring(0, s.length - tails);
    remaining = _reverse(s.substring(s.length - tails));
  }

  let index = 0;
  let skip = false;
  let result = [];
  while (index < str.length) {
    let next = index + k;
    if (skip) {
      result.push(str.substring(index, next));
    } else {
      result.push(_reverse(str.substring(index, next)))
    }
    skip = !skip;
    index = next;
  }
  result.push(remaining);

  function _reverse(str) {
    if (str.length < 2) { return str; }
    return str.split('').reverse().join('');
  }
  return result.join('');
};
function test() {
  const res = reverseStr('abcdefg', 2);
  console.log(res)
}
test();
function reverseTest() {
  // const str1 = 'abcdefghijklmnopqrstuvwxyz=';
  const str = 'adfkkeqlkqeradfadfalewkjljlkjqewrqerlkjlkjadflkqjerllaldsfadfdljljljlklqewrqeljladfadeadfkkeqlkqeradfadfalewkjljlkjqewrqerlkjlkjadflkqjerllaldsfadfdljljljlklqewrqeljladfadfkkeqlkqeradfadfalewkjljlkjqewrqerlkjlkjadflkqjerllaldsfadfdljljljlkadfkkeqlkqeradfadfalewkjljlkjqewrqerlkjlkjadflkqjerllaldsfadfdljljljlkladfkkeqlkqeradfadfalewkjljlkjqewrqerlkjlkjadflkqjerllaldsfadfdljljljladfkkeqlkqeradfadfalewkjljlkjqewrqerlkjlkjadflkqjerllaldsfadfdljljljlklqewradfkkeqlkqeradfadfalewkjljlkjqewrqerlkjlkjadflkqjerllaldsfadfdljljljlklqewrqeljladfadewqeljladfadewklqewrqeljladfadewqewrqeljladfadewlqewrqeljladfadewadeww'
  const startTime = Date.now();
  for (var i = 0; i < 1000000; i++) {
    _reverseSwap(str);
  }
  const byArray = Date.now();
  for (var j = 0; j < 1000000; j++) {
    _reverseArray(str);
  }
  const bySwap = Date.now();
  console.log('by-Swap:', byArray - startTime);
  console.log('byArray:', bySwap - byArray);
}

// reverseTest();