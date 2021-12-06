/**
 * @author Jianqiang Zhang
 * @email jankergg@gmail.com
 * @create date 2021-10-07 22:27:21
 * @modify date 2021-10-07 22:27:21
 * @desc [description]
 */
/**
 *
 * @param {number} a ,the bigger one
 * @param {number} b ,the minor one
 * @returns {number}
 */

function div(a, b, p = 10) {
  if (a === 0) { return 0 }
  if (b === 1) { return a }
  if (a === b) { return 1 };

  if (p < 0) { return 0 }

  if (a > b) {
    return div(a - b, b, p) + 1;
  } else {
    let f = 1;
    let prefix = 10;
    while (a < b) {
      a *= prefix;
      f *= prefix;
    }
    return div(a, b, --p) / f;
  }
}
console.log(div(10, 6))
